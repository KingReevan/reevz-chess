import type { Opening } from '@content'
import { BOTS, botById, candidates, openingInfo } from '../lib/book'
import { moveLabel } from '../lib/chess'
import { chapterOf, moduleKey, ordered } from '../lib/content'
import { lastWeek, streaks } from '../lib/dates'
import { ACHIEVEMENTS, chapterProgress, doneCount, todayCount } from '../lib/progress'
import { useLive, useStore, type RightTab } from '../lib/store'
import { Bar, Ring } from './bits'
import { Glyph, Icon, type IconName } from './Icon'

function Coach({ op }: { op: Opening }) {
  const coach = useLive((s) => s.coach)
  const view = useStore((s) => s.view)
  const notes = useStore((s) => s.notes)
  const setNote = useStore((s) => s.setNote)
  const done = useStore((s) => s.done)
  const go = useStore((s) => s.go)

  if (view.type === 'module' && op.modules[view.id]) {
    const m = op.modules[view.id]
    const ch = chapterOf(op, m.id)
    const key = moduleKey(op, m.id)
    return (
      <>
        {coach?.kind === 'line' && (
          <div className="rcard">
            <h3>Current line</h3>
            <div className="rline">
              {coach.moves.map((san, i) => (
                <span key={i} style={{ display: 'contents' }}>
                  {i % 2 === 0 && <span className="no">{i / 2 + 1}.</span>}
                  <button className={`${i + 1 === coach.ply ? 'cur' : ''}${i + 1 < coach.start ? ' pre' : ''}`} onClick={() => coach.jump(i + 1)}>{san}</button>
                </span>
              ))}
            </div>
            <p className="where">Part of <b>{ch.title}</b></p>
          </div>
        )}
        <div className="rcard">
          <h3>Key ideas</h3>
          <ul className="ideas">{ch.ideas.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </div>
        {!!m.terms?.length && (
          <div className="rcard">
            <h3>Words in this module</h3>
            <dl className="terms">{m.terms.map((t) => <div key={t.term}><dt>{t.term}</dt><dd>{t.meaning}</dd></div>)}</dl>
          </div>
        )}
        <div className="rcard">
          <h3><label htmlFor="notes">My notes</label><span className="fine" style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 400 }}>Saved automatically</span></h3>
          <textarea id="notes" className="notes" placeholder="What clicked? What do you want to revisit?" value={notes[key] ?? ''} onChange={(e) => setNote(key, e.target.value)} />
        </div>
      </>
    )
  }

  if (view.type === 'play' && coach?.kind === 'play') {
    const info = openingInfo(op, coach.history)
    const next = candidates(op, coach.history).slice(0, 6)
    return (
      <>
        <div className="rcard">
          <h3>Opening</h3>
          <div className={`opening${info.out ? ' out' : ''}`}><small>{info.out ? 'Out of book' : 'Opening'}</small><b>{info.name}</b><span className="fine">{info.sub}</span></div>
        </div>
        <div className="rcard">
          <h3>Book moves from here</h3>
          {next.length ? (
            <>
              <div className="bookmoves">
                {next.map((c) => (
                  <button key={c.san} disabled={!coach.myTurn} onClick={() => coach.play(c.san)}>
                    <b>{moveLabel(coach.history.length, c.san)}</b>
                    <span>{c.lines[0].name}</span>
                  </button>
                ))}
              </div>
              <p className="fine">{coach.myTurn ? 'Click a move to play it.' : 'These are the moves the bot knows here.'}</p>
            </>
          ) : (
            <p className="fine">No book moves from this position. You're on your own now.</p>
          )}
        </div>
      </>
    )
  }

  const list = ordered(op)
  const next = list.find(({ m }) => !done[moduleKey(op, m.id)])?.m
  return (
    <>
      {next && (
        <div className="rcard">
          <h3>Up next</h3>
          <button className="btn primary wrap" onClick={() => go({ type: 'module', id: next.id })}><Icon name="play" /> {next.id} {next.title}</button>
        </div>
      )}
      <div className="rcard">
        <h3>How this course works</h3>
        <ul className="ideas">
          <li>Each module teaches one idea and takes about 10 minutes.</li>
          <li>Every module has walkthroughs, a practice board and a quick quiz.</li>
          <li>Finished modules become flashcards, so the lines stick.</li>
          <li>The final exam unlocks when all {list.length} modules are done.</li>
        </ul>
      </div>
      <div className="rcard">
        <h3>Shortcuts</h3>
        <ul className="ideas">
          <li>← → step through a walkthrough board</li>
          <li>Ctrl+K search · Ctrl+B course sidebar · Ctrl+J coach sidebar</li>
        </ul>
      </div>
    </>
  )
}

function Play() {
  const s = useStore()
  const bot = botById(s.bot)
  const opt = <K extends 'playAs' | 'startFrom'>(k: K, v: (typeof s)[K], label: string) => (
    <button aria-selected={s[k] === v} onClick={() => s.set({ [k]: v } as Partial<typeof s>)}>{label}</button>
  )
  return (
    <>
      <div className="rcard">
        <h3>Choose a bot</h3>
        <div className="bots">
          {BOTS.map((b) => (
            <button key={b.id} className="bot" aria-pressed={s.bot === b.id} onClick={() => s.set({ bot: b.id })}>
              <span className="avatar"><Glyph g={b.glyph} /></span>
              <span><b>{b.name}<span>{b.elo}</span></b><span className="bot-d">{b.blurb}</span></span>
            </button>
          ))}
        </div>
      </div>
      <div className="rcard">
        <div className="optrow"><label>Play as</label><div className="seg">{opt('playAs', 'white', 'White')}{opt('playAs', 'black', 'Black')}{opt('playAs', 'random', 'Random')}</div></div>
        <div className="optrow"><label>Start from</label><div className="seg two">{opt('startFrom', 'start', 'Move 1')}{opt('startFrom', 'spanish', 'After 3.Bb5')}</div></div>
        <button className="btn primary" onClick={() => s.go({ type: 'play' })}><Icon name="play" /> Play {bot.name}</button>
        <p className="fine">Bots play the opening lines from the course first, so every game drills your opening.</p>
      </div>
    </>
  )
}

function Progress({ op }: { op: Opening }) {
  const s = useStore()
  const now = Date.now()
  const today = todayCount(s.activity)
  const { current, best } = streaks(s.activity)
  const week = lastWeek(s.activity)
  const max = Math.max(3, ...week.map((d) => d.n))
  const n = doneCount(op, s.done)
  const total = ordered(op).length
  const due = Object.entries(s.cards).filter(([k, c]) => k.startsWith(op.id + '/') && c.due <= now).length
  const goalLeft = s.dailyGoal - today
  return (
    <>
      <div className="rcard">
        <div className="streak">
          <span className="flame"><Icon name="flame" /></span>
          <div><b>{current} day{current === 1 ? '' : 's'}</b><span>{current ? 'Current streak' : 'Finish a module to start a streak'} · best {best}</span></div>
        </div>
        <div className="week">
          {week.map((d, i) => (
            <div key={i}><i className={`${d.n ? '' : 'zero'}${d.today ? ' today' : ''}`} style={{ height: `${Math.max(6, (d.n / max) * 100)}%` }} title={`${d.n} module${d.n === 1 ? '' : 's'}`} /><span>{d.label}</span></div>
          ))}
        </div>
      </div>
      <div className="rcard">
        <h3>Today</h3>
        <div className="goal">
          <Ring value={today / s.dailyGoal} label={`${today}/${s.dailyGoal}`} />
          <div>
            <b>{goalLeft <= 0 ? 'Daily goal reached' : `${goalLeft} more module${goalLeft > 1 ? 's' : ''} to hit your goal`}</b>
            <span>Busy day? One module still keeps the streak alive.</span>
          </div>
        </div>
      </div>
      <div className="rcard">
        <h3>{op.name}</h3>
        <div className="big">{total ? Math.round((n / total) * 100) : 0}%<small>{n} of {total} modules</small></div>
        <div className="chbars">
          {op.chapters.map((c) => {
            const [d, t] = chapterProgress(op, c.id, s.done)
            return <div key={c.id} title={c.title}><span>{c.n}</span><Bar value={t ? d / t : 0} /><span>{d}/{t}</span></div>
          })}
        </div>
      </div>
      <div className="rcard">
        <div className="due">
          <div><b>{due} position{due === 1 ? '' : 's'}</b><span>due for review</span></div>
          <button className="btn sm primary" onClick={() => s.go({ type: 'review' })}>Review</button>
        </div>
      </div>
      <div className="rcard">
        <h3>Achievements <span className="count">{ACHIEVEMENTS.filter((a) => s.achievements[a.id]).length}/{ACHIEVEMENTS.length}</span></h3>
        <div className="badges">
          {ACHIEVEMENTS.map((a) => (
            <div key={a.id} className={`badge${s.achievements[a.id] ? ' got' : ''}`} title={a.desc}>
              <span className="medal"><Glyph g={a.glyph} /></span>
              <span>{a.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const TABS: [RightTab, IconName, string][] = [['coach', 'book', 'Coach'], ['play', 'bot', 'Play'], ['progress', 'chart', 'Progress']]

export function RightRail({ op }: { op: Opening }) {
  const tab = useStore((s) => s.rightTab)
  const set = useStore((s) => s.set)
  return (
    <aside className="right" aria-label="Coach">
      <div className="tabs" role="tablist">
        {TABS.map(([k, i, t]) => (
          <button key={k} role="tab" aria-selected={tab === k} onClick={() => set({ rightTab: k })}><Icon name={i} /> {t}</button>
        ))}
      </div>
      <div className="rbody">
        {tab === 'coach' && <Coach op={op} />}
        {tab === 'play' && <Play />}
        {tab === 'progress' && <Progress op={op} />}
      </div>
    </aside>
  )
}
