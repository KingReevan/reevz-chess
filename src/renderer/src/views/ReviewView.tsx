import { useMemo, useState } from 'react'
import type { Module, Opening } from '@content'
import { Board } from '../components/Board'
import { Drill } from '../components/Drill'
import { Icon } from '../components/Icon'
import { SideChip, StageBar, HOME_CRUMB } from '../components/bits'
import { fenAfter, isPrefix, lastMove, lineText, tokens } from '../lib/chess'
import { moduleKey, ordered } from '../lib/content'
import { preview, type Grade } from '../lib/srs'
import { useStore } from '../lib/store'

type Tab = 'cards' | 'trainer' | 'sheet'

/** Where to start printing a line: skip the course's defining moves when the line goes past them. */
function shortFrom(op: Opening, moves: string) {
  const pre = tokens(op.moves), t = tokens(moves)
  return t.length > pre.length && isPrefix(pre, t) ? pre.length : 0
}

function Flashcards({ op }: { op: Opening }) {
  const cards = useStore((s) => s.cards)
  const gradeCard = useStore((s) => s.gradeCard)
  const go = useStore((s) => s.go)
  const [all, setAll] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [seen, setSeen] = useState(0)
  const now = Date.now()
  const deck = ordered(op)
    .map(({ m }) => ({ m, key: moduleKey(op, m.id) }))
    .filter((x) => cards[x.key])
  const due = deck.filter((x) => cards[x.key].due <= now).sort((a, b) => cards[a.key].due - cards[b.key].due)
  const queue = all ? deck : due
  const cur = queue.length ? queue[seen % queue.length] : null

  if (!deck.length)
    return <p className="note"><Icon name="info" /><span>Finish a module and its key position becomes a flashcard here. Cards come back on a schedule: tomorrow, then a few days later, then longer.</span></p>
  if (!cur)
    return (
      <div className="card flash-a">
        <div className="flash-name">All caught up</div>
        <p className="fine">No cards are due right now. {deck.length} card{deck.length > 1 ? 's' : ''} in your deck. Come back tomorrow, or practise ahead.</p>
        <div><button className="btn primary" onClick={() => { setAll(true); setSeen(0) }}><Icon name="cards" /> Practise all {deck.length} cards</button></div>
      </div>
    )

  const card = cards[cur.key]
  const rate = (g: Grade) => {
    gradeCard(cur.key, g)
    setRevealed(false)
    setSeen((n) => n + (all ? 1 : 0))
  }
  return (
    <div className="flash">
      <div className="fl-board">
        <Board fen={fenAfter(cur.m.key.moves)} orientation={cur.m.key.orientation} lastMove={lastMove(cur.m.key.moves)} />
      </div>
      <div className="card flash-a">
        <span className="eyebrow">{all ? `Practice · card ${(seen % queue.length) + 1} of ${queue.length}` : `${due.length} due today`}</span>
        <p className="dr-prompt">Which line is this, and what's the idea? Say it out loud, then reveal the answer.</p>
        {revealed ? (
          <>
            <div>
              <div className="flash-name">{cur.m.key.name}</div>
              <p className="fine mono" style={{ marginTop: 6 }}>{lineText(cur.m.key.moves, shortFrom(op, cur.m.key.moves))}</p>
            </div>
            <p className="fine">{cur.m.takeaway}</p>
            <div className="srs">
              <button onClick={() => rate('again')}>Again<small>{preview(card, 'again')}</small></button>
              <button onClick={() => rate('good')}>Good<small>{preview(card, 'good')}</small></button>
              <button onClick={() => rate('easy')}>Easy<small>{preview(card, 'easy')}</small></button>
            </div>
            <div><button className="linkbtn" onClick={() => go({ type: 'module', id: cur.m.id })}>Revisit Module {cur.m.id}</button></div>
          </>
        ) : (
          <div><button className="btn primary" onClick={() => setRevealed(true)}><Icon name="eye" /> Reveal answer</button></div>
        )}
      </div>
    </div>
  )
}

function Trainer({ op }: { op: Opening }) {
  const done = useStore((s) => s.done)
  const finished = ordered(op).filter(({ m }) => done[moduleKey(op, m.id)] && tokens(m.key.moves).length > 5)
  const pool = finished.length ? finished : ordered(op).filter(({ ch }) => ch.n <= 2)
  const [pick, setPick] = useState(() => Math.floor(Math.random() * Math.max(1, pool.length)))
  const item = pool[pick % Math.max(1, pool.length)]
  const d = useMemo(
    () => item && {
      title: 'Line trainer',
      prompt: `Play ${item.m.key.orientation === 'white' ? "White's" : "Black's"} moves from memory. The board plays the other side.`,
      moves: item.m.key.moves,
      start: 0,
      side: item.m.key.orientation,
      success: `Line complete: ${item.m.key.name}.`
    },
    [item]
  )
  if (!item || !d) return null
  return (
    <div className="sec">
      <p className="note">
        <Icon name="info" />
        <span>
          From <b>Module {item.m.id}: {item.m.title}</b>.{' '}
          {finished.length ? 'Lines come from modules you have finished.' : 'Finish modules to train their lines here. Until then, here are lines from Chapters 1 and 2.'}
        </span>
      </p>
      <Drill key={`${item.m.id}-${pick}`} d={d} />
      <div><button className="btn sm" onClick={() => setPick((p) => p + 1 + Math.floor(Math.random() * Math.max(1, pool.length - 1)))}><Icon name="restart" /> Another line</button></div>
    </div>
  )
}

function CheatSheet({ op }: { op: Opening }) {
  const go = useStore((s) => s.go)
  return (
    <div className="sheet">
      {op.chapters.map((ch) => {
        const mods = ch.modules.map((id) => op.modules[id]).filter(Boolean) as Module[]
        if (!mods.length) return null
        return (
          <section key={ch.id} className="sec">
            <h3>{ch.n}. {ch.title} <SideChip side={ch.side} /></h3>
            <div className="tbl">
              <table>
                <thead><tr><th>Module</th><th>Key moves</th><th>Remember</th></tr></thead>
                <tbody>
                  {mods.map((m) => (
                    <tr key={m.id}>
                      <td><button className="linkbtn" onClick={() => go({ type: 'module', id: m.id })}>{m.id}</button> {m.key.name}</td>
                      <td className="mono">{lineText(m.key.moves, shortFrom(op, m.key.moves))}</td>
                      <td>{m.takeaway}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export function ReviewView({ op }: { op: Opening }) {
  const [tab, setTab] = useState<Tab>('cards')
  const tabs: [Tab, 'cards' | 'route' | 'table', string][] = [['cards', 'cards', 'Flashcards'], ['trainer', 'route', 'Line trainer'], ['sheet', 'table', 'Cheat sheet']]
  return (
    <>
      <StageBar crumbs={[HOME_CRUMB, { label: op.name, to: { type: 'overview' } }, 'Revision hub']} />
      <div className="inner">
        <header className="l-head">
          <p className="eyebrow">Revision and mastery</p>
          <h1 className="l-title">Revision hub</h1>
          <p className="lede">Short daily reviews keep the lines fresh. Positions from finished modules come back just before you would forget them.</p>
        </header>
        <div className="seg" role="tablist" aria-label="Revision tools">
          {tabs.map(([k, i, t]) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)}><Icon name={i} /> {t}</button>
          ))}
        </div>
        {tab === 'cards' && <Flashcards op={op} />}
        {tab === 'trainer' && <Trainer op={op} />}
        {tab === 'sheet' && <CheatSheet op={op} />}
      </div>
    </>
  )
}
