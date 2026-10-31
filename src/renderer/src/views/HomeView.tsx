import { useState } from 'react'
import type { Opening } from '@content'
import { Board } from '../components/Board'
import { Glyph, Icon } from '../components/Icon'
import { Bar, Ring, SideChip } from '../components/bits'
import { fenAfter, lastMove, lineText } from '../lib/chess'
import { courseMinutes, nextModule, openings, ordered } from '../lib/content'
import { streaks } from '../lib/dates'
import { ACHIEVEMENTS, doneCount, todayCount } from '../lib/progress'
import { useStore } from '../lib/store'

/** Everything the home search looks through for one opening. */
const haystack = (op: Opening) =>
  [op.name, op.alias, op.eco, lineText(op.moves), ...op.chapters.map((c) => c.title), ...Object.values(op.modules).map((m) => m.title)].join(' ').toLowerCase()

function CourseCard({ op }: { op: Opening }) {
  const done = useStore((s) => s.done)
  const exam = useStore((s) => s.examBest[op.id])
  const enter = useStore((s) => s.enter)
  const total = ordered(op).length
  const n = doneCount(op, done)
  const pct = total ? Math.round((n / total) * 100) : 0
  const next = nextModule(op, done)
  const complete = total > 0 && n === total
  const status = complete ? 'Completed' : n ? 'In progress' : 'Not started'
  const hours = Math.max(1, Math.round(courseMinutes(op) / 60))

  return (
    <article className={`course-card${complete ? ' complete' : ''}`} data-opening={op.id}>
      <button className="cc-open" onClick={() => enter(op.id)} aria-label={`Open the ${op.name} course`}>
        <span className="cc-banner">
          <span className="cc-board"><Board fen={fenAfter(op.moves)} orientation="white" lastMove={lastMove(op.moves)} mini /></span>
          <span className="cc-ring" title={`${pct}% complete`}><Ring value={pct / 100} label={`${pct}%`} /></span>
        </span>
        <span className="cc-body">
          <span className="cc-eco">ECO {op.eco}</span>
          <span className="cc-name">{op.name}</span>
          <span className="cc-alias">{op.alias}</span>
          <span className="cc-moves">{lineText(op.moves)}</span>
          <span className="cc-tags">
            <SideChip side={op.side} />
            <span className="cc-facts">{total} modules · {op.chapters.length} chapters · {hours} h</span>
          </span>
        </span>
      </button>
      <div className="cc-foot">
        <div className="cc-prog">
          <Bar value={total ? n / total : 0} />
          <span className="count">{n}/{total}</span>
        </div>
        <div className="cc-row">
          <span className={`cc-status${complete ? ' done' : n ? ' going' : ''}`}>
            {status}{exam ? ` · exam best ${exam}%` : ''}
          </span>
          <button
            className="btn sm primary"
            onClick={() => enter(op.id, next ? { type: 'module', id: next.id } : { type: 'review' })}
            title={next ? `${next.id} ${next.title}` : 'Revision hub'}
          >
            {n === 0 ? 'Start' : next ? 'Continue' : 'Revise'} <Icon name="arrowR" />
          </button>
        </div>
      </div>
    </article>
  )
}

/** The landing page: every opening course as a card, with the learner's overall stats on top. */
export function HomeView() {
  const s = useStore()
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const shown = openings.filter((op) => !q || haystack(op).includes(q))
  const { current } = streaks(s.activity)
  const today = todayCount(s.activity)
  const finished = openings.reduce((a, op) => a + doneCount(op, s.done), 0)
  const badges = ACHIEVEMENTS.filter((a) => s.achievements[a.id]).length
  const goalLeft = s.dailyGoal - today

  return (
    <div className="inner wide home">
      <header className="home-head">
        <div>
          <p className="eyebrow">Your opening library</p>
          <h1 className="home-title">Pick an opening</h1>
          <p className="home-sub">Each course teaches one opening in short modules, with walkthroughs, practice boards and quizzes.</p>
        </div>
        <div className="search home-search">
          <Icon name="search" />
          <input
            id="search"
            type="search"
            placeholder="Search openings"
            autoComplete="off"
            aria-label="Search openings"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Escape') setQuery('') }}
          />
          <kbd>Ctrl K</kbd>
        </div>
      </header>

      <div className="home-stats">
        <div className="hs">
          <span className="hs-ic flame"><Icon name="flame" /></span>
          <span><b>{current} day{current === 1 ? '' : 's'}</b><small>{current ? 'current streak' : 'finish a module to start a streak'}</small></span>
        </div>
        <div className="hs">
          <Ring value={today / s.dailyGoal} label={`${today}/${s.dailyGoal}`} />
          <span><b>Today</b><small>{goalLeft <= 0 ? 'daily goal reached' : `${goalLeft} more to hit your goal`}</small></span>
        </div>
        <div className="hs">
          <span className="hs-ic"><Icon name="check" /></span>
          <span><b>{finished}</b><small>module{finished === 1 ? '' : 's'} finished</small></span>
        </div>
        <div className="hs">
          <span className="hs-ic brass"><Icon name="trophy" /></span>
          <span><b>{badges}/{ACHIEVEMENTS.length}</b><small>achievements</small></span>
        </div>
      </div>

      <section className="sec">
        <div className="sec-h">
          <h2>Openings</h2>
          <span className="sec-sub">{openings.length} course{openings.length === 1 ? '' : 's'} · progress is saved on this computer</span>
        </div>
        <div className="course-grid">
          {shown.map((op) => <CourseCard key={op.id} op={op} />)}
          {!q && (
            <div className="course-card soon" aria-label="More openings coming">
              <span className="soon-ic"><Glyph g="♞" /></span>
              <b>More openings on the way</b>
              <span>New courses arrive with app updates.</span>
            </div>
          )}
        </div>
        {q && !shown.length && <p className="empty">No opening matches “{query.trim()}”.</p>}
      </section>
    </div>
  )
}
