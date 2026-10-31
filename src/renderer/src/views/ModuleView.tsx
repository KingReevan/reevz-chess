import { useEffect, useRef, useState } from 'react'
import type { Chapter, Module, Opening, Section } from '@content'
import { Drill } from '../components/Drill'
import { Icon, type IconName } from '../components/Icon'
import { Quiz } from '../components/Quiz'
import { LevelBars, SideChip, StageBar, HOME_CRUMB } from '../components/bits'
import { Walkthrough } from '../components/Walkthrough'
import { moduleKey, ordered } from '../lib/content'
import { award, completeModule } from '../lib/progress'
import { Rich } from '../lib/rich'
import { useLive, useStore } from '../lib/store'

const LEVEL = ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert']
const CALLOUT_ICON: Record<string, IconName> = { tip: 'bulb', warning: 'warn', history: 'scroll' }

export function ModuleView({ op, m, ch }: { op: Opening; m: Module; ch: Chapter }) {
  const list = ordered(op)
  const idx = list.findIndex((x) => x.m.id === m.id)
  const prev = list[idx - 1]?.m
  const next = list[idx + 1]?.m
  const key = moduleKey(op, m.id)
  const done = useStore((s) => !!s.done[key])
  const go = useStore((s) => s.go)
  const solveDrill = useStore((s) => s.solveDrill)
  const setCoach = useLive((s) => s.setCoach)
  const [active, setActive] = useState(0)
  const finishRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setActive(0)
    return () => setCoach(null)
  }, [m.id, setCoach])

  let walkIndex = -1
  const renderSection = (s: Section, i: number) => {
    if (s.kind === 'walkthrough') {
      const wi = ++walkIndex
      return (
        <section className="sec" key={i}>
          <div className="sec-h">
            <h2>{s.title}</h2>
            <span className="sec-sub">Use the ← → keys to step through</span>
          </div>
          <Walkthrough w={s} active={active === wi} onActivate={() => setActive(wi)} />
        </section>
      )
    }
    if (s.kind === 'text') {
      return (
        <section className="sec" key={i}>
          {s.title && <div className="sec-h"><h2>{s.title}</h2></div>}
          <Rich text={s.body} />
        </section>
      )
    }
    return (
      <div className={`callout ${s.kind}`} key={i}>
        <span className="ci"><Icon name={CALLOUT_ICON[s.kind]} /></span>
        <div>
          <h3>{s.title}</h3>
          <Rich text={s.body} />
        </div>
      </div>
    )
  }

  return (
    <>
      <StageBar crumbs={[HOME_CRUMB, { label: op.name, to: { type: 'overview' } }, `Chapter ${ch.n}`, `Module ${m.id}`]} prev={prev} next={next} />
      <div className="inner" key={m.id}>
        <header className="l-head">
          <p className="eyebrow">Chapter {ch.n} · {ch.title}</p>
          <h1 className="l-title">{m.title}</h1>
          <div className="l-meta">
            <span className="meta"><Icon name="clock" />{m.minutes} min</span>
            <span className="meta"><LevelBars n={m.level} />{LEVEL[m.level]}</span>
            <SideChip side={ch.side} />
            <span className="meta">Module {idx + 1} of {list.length}</span>
            {done && <span className="meta done"><Icon name="check" />Completed</span>}
          </div>
        </header>

        <section className="goals card">
          <h2 className="h-sm">In this module</h2>
          <ul>{m.goals.map((g, i) => <li key={i}><Icon name="target" /><span>{g}</span></li>)}</ul>
        </section>

        <p className="lede">{m.intro}</p>

        {m.sections.map(renderSection)}

        <div className="callout">
          <span className="ci"><Icon name="bulb" /></span>
          <div><h3>Key takeaway</h3><p>{m.takeaway}</p></div>
        </div>
        {m.lookAhead && (
          <div className="callout plain">
            <span className="ci"><Icon name="arrowR" /></span>
            <div><h3>Looking ahead</h3><p>{m.lookAhead}</p></div>
          </div>
        )}

        <section className="sec">
          <div className="sec-h"><h2>Practice</h2><span className="sec-sub">{m.drills.length > 1 ? `${m.drills.length} boards` : 'Find it yourself'}</span></div>
          {m.drills.map((d, i) => (
            <Drill
              key={`${m.id}-${i}`}
              d={d}
              onSolved={() => {
                solveDrill(`${key}#${i}`)
                if (key === 'ruy-lopez/2.2' && i === 0) award('fork')
              }}
            />
          ))}
        </section>

        <section className="sec">
          <div className="sec-h"><h2>Check your understanding</h2><span className="sec-sub">{m.quiz.length} questions</span></div>
          <Quiz key={m.id} qs={m.quiz} />
        </section>

        <section className={`card finish${done ? ' is-done' : ''}`}>
          <div>
            <h2>{done ? 'Module complete' : 'Finished this module?'}</h2>
            <p>{done ? 'Its key position is now in your review deck.' : 'Marking it complete adds its key position to your review deck.'}</p>
          </div>
          <div className="btnrow">
            {!done && (
              <button ref={finishRef} className="btn primary" onClick={() => completeModule(op, m.id, finishRef.current?.getBoundingClientRect())}>
                <Icon name="check" /> Mark as complete
              </button>
            )}
            {next ? (
              <button className={`btn${done ? ' primary' : ''}`} onClick={() => go({ type: 'module', id: next.id })}>
                Next: {next.id} <Icon name="arrowR" />
              </button>
            ) : (
              <button className={`btn${done ? ' primary' : ''}`} onClick={() => go({ type: 'review' })}>
                Revision hub <Icon name="arrowR" />
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
