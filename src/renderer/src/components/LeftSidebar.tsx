import { useEffect, useRef } from 'react'
import type { Chapter, Module, Opening } from '@content'
import { fenAfter, lineText } from '../lib/chess'
import { chapterKey, moduleKey, ordered } from '../lib/content'
import { chapterProgress, doneCount } from '../lib/progress'
import { useLive, useStore } from '../lib/store'
import { Board } from './Board'
import { Icon } from './Icon'
import { Bar, SideChip, SideDot } from './bits'

function hl(text: string, q: string) {
  if (!q) return text
  const i = text.toLowerCase().indexOf(q)
  if (i < 0) return text
  return <>{text.slice(0, i)}<mark>{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>
}

const matches = (m: Module, ch: Chapter, q: string) =>
  m.title.toLowerCase().includes(q) || m.id === q || m.key.name.toLowerCase().includes(q) || lineText(m.key.moves).toLowerCase().includes(q) || ch.title.toLowerCase().includes(q) || ch.tags.includes(q)

/** The chapters of one course as accordions, filtered by the search box. */
function Chapters({ op }: { op: Opening }) {
  const q = useLive((s) => s.query).trim().toLowerCase()
  const s = useStore()
  const cur = s.view.type === 'module' ? s.view.id : s.view.type
  const allDone = doneCount(op, s.done) === ordered(op).length

  let hits = 0
  const chapters = op.chapters.map((ch) => {
    const mods = ch.modules.map((id) => op.modules[id]).filter(Boolean).filter((m) => !q || matches(m, ch, q))
    if (q && !mods.length) return null
    hits += mods.length
    const [d, t] = chapterProgress(op, ch.id, s.done)
    const key = chapterKey(op, ch.id)
    const isOpen = q ? true : s.openChapters.includes(key)
    const full = t > 0 && d === t
    return (
      <div key={ch.id} className={`ch${isOpen ? ' open' : ''}${full ? ' full' : ''}`}>
        <button className="ch-head" aria-expanded={isOpen} onClick={() => s.toggleChapter(key)}>
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
    <>
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
      {q && !hits && <p className="empty">Nothing in this course matches “{q}”. Try Marshall, Berlin or trap.</p>}
    </>
  )
}

/** Sidebar shown inside a course: back to the grid, the course card, search and its chapters. */
export function LeftSidebar({ op }: { op: Opening }) {
  const query = useLive((s) => s.query)
  const setQuery = useLive((s) => s.setQuery)
  const view = useStore((s) => s.view)
  const done = useStore((s) => s.done)
  const go = useStore((s) => s.go)
  const list = useRef<HTMLDivElement>(null)
  const n = doneCount(op, done)
  const total = ordered(op).length

  useEffect(() => {
    if (view.type !== 'module') return
    const el = list.current?.querySelector(`[data-row="${view.id}"]`)
    const t = setTimeout(() => el?.scrollIntoView({ block: 'nearest' }), 300)
    return () => clearTimeout(t)
  }, [view])

  // A search typed in one course shouldn't follow the learner into the next.
  useEffect(() => () => setQuery(''), [op.id, setQuery])

  return (
    <aside className="left" aria-label={`${op.name} course`}>
      <div className="side-top">
        <button className="back" onClick={() => { setQuery(''); go({ type: 'home' }) }}>
          <Icon name="left" /> All openings
        </button>
        <button className="course-head" onClick={() => go({ type: 'overview' })} title="Course overview">
          <span className="course-thumb"><Board fen={fenAfter(op.moves)} orientation="white" mini /></span>
          <span className="course-meta">
            <span className="course-name">{op.name}</span>
            <span className="course-moves">{lineText(op.moves)}</span>
            <SideChip side={op.side} />
          </span>
        </button>
        <div className="course-prog">
          <Bar value={total ? n / total : 0} />
          <span className="count">{n}/{total}</span>
        </div>
      </div>
      <div className="search">
        <Icon name="search" />
        <input
          id="search"
          type="search"
          placeholder="Search this course"
          autoComplete="off"
          aria-label={`Search the ${op.name} course`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Escape') setQuery('') }}
        />
        <kbd>Ctrl K</kbd>
      </div>
      <div className="side-scroll" ref={list}>
        <Chapters op={op} />
      </div>
    </aside>
  )
}
