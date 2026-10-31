import { useEffect, useRef } from 'react'
import type { Chapter, Module, Opening } from '@content'
import { lineText } from '../lib/chess'
import { moduleKey, openings, ordered } from '../lib/content'
import { chapterProgress, doneCount } from '../lib/progress'
import { useLive, useStore } from '../lib/store'
import { Board } from './Board'
import { Icon } from './Icon'
import { Bar, SideChip, SideDot } from './bits'
import { fenAfter } from '../lib/chess'

function hl(text: string, q: string) {
  if (!q) return text
  const i = text.toLowerCase().indexOf(q)
  if (i < 0) return text
  return <>{text.slice(0, i)}<mark>{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>
}

const matches = (m: Module, ch: Chapter, q: string) =>
  m.title.toLowerCase().includes(q) || m.id === q || m.key.name.toLowerCase().includes(q) || lineText(m.key.moves).toLowerCase().includes(q) || ch.title.toLowerCase().includes(q) || ch.tags.includes(q)

function Course({ op }: { op: Opening }) {
  const q = useLive((s) => s.query).trim().toLowerCase()
  const s = useStore()
  const cur = s.view.type === 'module' ? s.view.id : s.view.type
  const n = doneCount(op, s.done)
  const total = ordered(op).length
  const open = s.courseOpen || !!q
  const allDone = total > 0 && n === total

  let hits = 0
  const chapters = op.chapters.map((ch) => {
    const mods = ch.modules.map((id) => op.modules[id]).filter(Boolean).filter((m) => !q || matches(m, ch, q))
    if (q && !mods.length) return null
    hits += mods.length
    const [d, t] = chapterProgress(op, ch.id, s.done)
    const isOpen = q ? true : s.openChapters.includes(ch.id)
    const full = t > 0 && d === t
    return (
      <div key={ch.id} className={`ch${isOpen ? ' open' : ''}${full ? ' full' : ''}`}>
        <button className="ch-head" aria-expanded={isOpen} onClick={() => s.toggleChapter(ch.id)}>
          <span className="ch-n">{full ? <Icon name="check" /> : ch.n}</span>
          <span className="ch-t">{hl(ch.title, q)}</span>
          <SideDot side={ch.side} />
          <span className="count">{d}/{t}</span>
          <Icon name="right" />
        </button>
        <div className="fold"><div><div className="mods">
          {mods.map((m) => {
            const done = !!s.done[moduleKey(op, m.id)]
            const on = cur === m.id
            return (
              <button key={m.id} className={`row${done ? ' done' : ''}${on ? ' on' : ''}`} aria-current={on ? 'page' : undefined} onClick={() => s.go({ type: 'module', id: m.id })} data-row={m.id}>
                <span className="st">{done && <Icon name="check" />}</span>
                <span className="row-t"><span className="row-id">{m.id}</span>{hl(m.title, q)}</span>
                <span className="row-m">{m.minutes}m</span>
              </button>
            )
          })}
        </div></div></div>
      </div>
    )
  })

  const reviewHit = !q || 'revision review flashcards trainer cheat sheet'.includes(q)
  const examHit = !q || 'final exam quiz test'.includes(q)
  if (q && reviewHit) hits++
  if (q && examHit) hits++

  return (
    <div className={`oc${open ? ' open' : ''}`}>
      <button className="oc-head" aria-expanded={open} onClick={() => s.set({ courseOpen: !s.courseOpen })}>
        <span className="oc-thumb"><Board fen={fenAfter(op.moves)} orientation="white" mini /></span>
        <span className="oc-meta">
          <span className="oc-name">{op.name}</span>
          <span className="oc-moves">{lineText(op.moves)}</span>
          <span className="oc-row"><SideChip side={op.side} /></span>
          <span className="oc-row"><Bar value={total ? n / total : 0} /><span className="count">{n}/{total}</span></span>
        </span>
        <Icon name="chev" className="oc-chev" />
      </button>
      <div className="fold"><div><div className="oc-body">
        {!q && (
          <button className={`ov-row${cur === 'overview' ? ' on' : ''}`} onClick={() => s.go({ type: 'overview' })}>
            <Icon name="grid" /> Course overview
          </button>
        )}
        {chapters}
        {(reviewHit || examHit) && (
          <div className="ch open">
            <button className="ch-head" aria-expanded="true" disabled>
              <span className="ch-n">{op.chapters.length + 1}</span>
              <span className="ch-t">Revision and mastery</span>
              <SideDot side="both" />
              <span className="count" />
              <span />
            </button>
            <div className="fold"><div><div className="mods">
              {reviewHit && (
                <button className={`row tool${cur === 'review' ? ' on' : ''}`} onClick={() => s.go({ type: 'review' })}>
                  <span className="st"><Icon name="cards" /></span><span className="row-t">Revision hub</span><span className="row-m">15m</span>
                </button>
              )}
              {examHit && (
                <button className={`row tool${cur === 'exam' ? ' on' : ''}`} onClick={() => s.go({ type: 'exam' })}>
                  <span className="st"><Icon name={allDone ? 'trophy' : 'lock'} /></span><span className="row-t">Final exam</span><span className="row-m">{allDone ? '45m' : 'locked'}</span>
                </button>
              )}
            </div></div></div>
          </div>
        )}
        {q && !hits && <p className="empty">Nothing matches “{q}”. Try Marshall, Berlin or trap.</p>}
      </div></div></div>
    </div>
  )
}

export function LeftSidebar() {
  const query = useLive((s) => s.query)
  const setQuery = useLive((s) => s.setQuery)
  const view = useStore((s) => s.view)
  const go = useStore((s) => s.go)
  const list = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (view.type !== 'module') return
    const el = list.current?.querySelector(`[data-row="${view.id}"]`)
    setTimeout(() => el?.scrollIntoView({ block: 'nearest' }), 300)
  }, [view])

  return (
    <aside className="left" aria-label="Courses">
      <div className="search">
        <Icon name="search" />
        <input
          id="search"
          type="search"
          placeholder="Search modules, lines, traps"
          autoComplete="off"
          aria-label="Search modules"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Escape') setQuery('') }}
        />
        <kbd>Ctrl K</kbd>
      </div>
      <div className="side-scroll" ref={list}>
        <p className="side-label">Openings</p>
        {openings.map((op) => <Course key={op.id} op={op} />)}
      </div>
      <div className="side-foot">
        <button className={`btn sm${view.type === 'settings' ? ' primary' : ''}`} onClick={() => go({ type: 'settings' })}><Icon name="gear" /> Settings</button>
      </div>
    </aside>
  )
}
