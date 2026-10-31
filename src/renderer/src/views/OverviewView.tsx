import type { MapNode, Opening } from '@content'
import { Board } from '../components/Board'
import { Icon } from '../components/Icon'
import { Bar, SideChip, StageBar } from '../components/bits'
import { fenAfter, lastMove } from '../lib/chess'
import { moduleKey, ordered } from '../lib/content'
import { chapterProgress, doneCount } from '../lib/progress'
import { useStore } from '../lib/store'

/** First unfinished module of a chapter (or its first module). */
function firstOpen(op: Opening, chId: string, done: Record<string, number>): string | undefined {
  const ch = op.chapters.find((c) => c.id === chId)
  const ids = ch?.modules.filter((id) => op.modules[id]) ?? []
  return ids.find((id) => !done[moduleKey(op, id)]) ?? ids[0]
}

function OpeningMap({ op }: { op: Opening }) {
  const done = useStore((s) => s.done)
  const go = useStore((s) => s.go)
  const W = 122, H = 42, CW = 142, RH = 52, PAD = 4
  type N = MapNode & { d: number; y: number }
  const nodes: N[] = []
  const links: [N, N][] = []
  let leaf = 0
  const lay = (n: MapNode, d: number, parent: N | null): N => {
    const me = { ...n, d, y: 0 } as N
    if (n.children?.length) {
      const kids = n.children.map((c) => lay(c, d + 1, me))
      me.y = kids.reduce((a, k) => a + k.y, 0) / kids.length
    } else me.y = leaf++ * RH
    nodes.push(me)
    if (parent) links.push([parent, me])
    return me
  }
  lay(op.map, 0, null)
  const pct = (n: MapNode) => {
    if (n.module) return done[moduleKey(op, n.module)] ? 1 : 0
    const [d, t] = chapterProgress(op, n.chapter, done)
    return t ? d / t : 0
  }
  const maxD = Math.max(...nodes.map((n) => n.d))
  const w = maxD * CW + W + PAD * 2, h = (leaf - 1) * RH + H + PAD * 2
  const X = (n: N) => PAD + n.d * CW, Y = (n: N) => PAD + n.y
  const open = (n: MapNode) => {
    const id = n.module && op.modules[n.module] ? n.module : firstOpen(op, n.chapter, done)
    if (id) go({ type: 'module', id })
  }
  return (
    <svg className="map" width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="group" aria-label="Map of the variations">
      {links.map(([a, b], i) => {
        const x1 = X(a) + W, y1 = Y(a) + H / 2, x2 = X(b), y2 = Y(b) + H / 2, mx = (x1 + x2) / 2
        return <path key={i} className={`lk${pct(b) === 1 ? ' done' : ''}`} d={`M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`} />
      })}
      {nodes.map((n, i) => {
        const p = pct(n)
        return (
          <g
            key={i}
            className={`nd${p === 1 ? ' done' : p > 0 ? ' part' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`${n.move} ${n.name}`}
            transform={`translate(${X(n)} ${Y(n)})`}
            onClick={() => open(n)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(n) } }}
          >
            <rect className="box" width={W} height={H} rx="9" />
            <text className="mv" x="10" y="18">{n.move}</text>
            <text className="nm" x="10" y="32">{n.name}</text>
            <rect className="pb" x={W - 26} y="10" width="16" height="4" rx="2" />
            <rect className="pf" x={W - 26} y="10" width={(16 * p).toFixed(1)} height="4" rx="2" />
          </g>
        )
      })}
    </svg>
  )
}

export function OverviewView({ op }: { op: Opening }) {
  const done = useStore((s) => s.done)
  const go = useStore((s) => s.go)
  const list = ordered(op)
  const n = doneCount(op, done)
  const next = list.find(({ m }) => !done[moduleKey(op, m.id)])?.m ?? list[0]?.m
  const minutes = list.reduce((a, { m }) => a + m.minutes, 0)

  return (
    <>
      <StageBar crumbs={[op.name, 'Course overview']} />
      <div className="inner">
        <section className="hero">
          <div>
            <span className="eyebrow">Opening course · ECO {op.eco}</span>
            <h1>The {op.name}</h1>
            <p className="alias">{op.alias} · 1.e4 e5 2.Nf3 Nc6 3.Bb5</p>
            <p className="about">{op.about}</p>
            <div className="hero-stats">
              <span><b>{list.length}</b>modules</span>
              <span><b>{Math.round(minutes / 60)} h</b>of lessons</span>
              <span><b>{op.chapters.length}</b>chapters</span>
              <span><b>{list.length ? Math.round((n / list.length) * 100) : 0}%</b>complete</span>
            </div>
            <div className="hero-cta">
              {next && (
                <button className="btn primary wrap" onClick={() => go({ type: 'module', id: next.id })}>
                  <Icon name="play" /> {n ? 'Continue' : 'Start'}: {next.id} {next.title}
                </button>
              )}
              <SideChip side={op.side} />
            </div>
          </div>
          <div className="hero-board">
            <Board
              fen={fenAfter(op.moves)}
              orientation="white"
              lastMove={lastMove(op.moves)}
              arrows={[['b5', 'c6', 'yellow'], ['c6', 'e5', 'green'], ['f3', 'e5', 'red']]}
            />
            <p className="cap">The Spanish bishop attacks the knight that guards e5.</p>
          </div>
        </section>

        <section className="sec">
          <div className="sec-h">
            <h2>Map of the opening</h2>
            <div className="legend">
              <span><i className="lg done" />Done</span>
              <span><i className="lg part" />In progress</span>
              <span><i className="lg" />Not started</span>
            </div>
          </div>
          <div className="card mapwrap"><OpeningMap op={op} /></div>
        </section>

        <section className="sec">
          <div className="sec-h"><h2>Syllabus</h2><span className="sec-sub">One idea per module, about 10 minutes each</span></div>
          <div className="syl">
            {op.chapters.map((c) => {
              const [d, t] = chapterProgress(op, c.id, done)
              const mins = c.modules.reduce((a, id) => a + (op.modules[id]?.minutes ?? 0), 0)
              const target = firstOpen(op, c.id, done)
              return (
                <button key={c.id} className={`syl-item${t && d === t ? ' full' : ''}`} onClick={() => target && go({ type: 'module', id: target })}>
                  <span className="syl-n">{t && d === t ? <Icon name="check" /> : c.n}</span>
                  <span>
                    <span className="syl-t">{c.title} <SideChip side={c.side} /></span>
                    <span className="syl-b">{c.blurb}</span>
                  </span>
                  <span className="syl-p">
                    <span>{d}/{t} · {mins} min</span>
                    <Bar value={t ? d / t : 0} />
                  </span>
                </button>
              )
            })}
            <button className="syl-item" onClick={() => go({ type: 'review' })}>
              <span className="syl-n">{op.chapters.length + 1}</span>
              <span>
                <span className="syl-t">Revision and mastery <SideChip side="both" /></span>
                <span className="syl-b">Flashcards, a line trainer, a cheat sheet and the final exam.</span>
              </span>
              <span className="syl-p"><span>Unlocks as you go</span></span>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
