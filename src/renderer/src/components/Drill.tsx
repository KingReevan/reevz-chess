import { useEffect, useMemo, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import type { Key } from 'chessground/types'
import type { Arrow } from '@content'
import { colorOf, dests, moveLabel, norm, tokens, walk, type Color } from '../lib/chess'
import { playMoveSound, sound } from '../lib/sound'
import { Board, BoardTools } from './Board'
import { Icon } from './Icon'

export interface DrillSpec {
  title?: string
  prompt: string
  moves: string | string[]
  start: number
  side: Color
  hints?: string[]
  success: string
}

type Status = { kind: 'info' | 'good' | 'bad' | 'win'; msg: React.ReactNode }

/** An interactive board: the learner plays `side`, the app answers with the line's other moves. */
export function Drill({ d, onSolved }: { d: DrillSpec; onSolved?: () => void }) {
  const sans = useMemo(() => tokens(d.moves), [d.moves])
  const pos = useMemo(() => walk(sans), [sans])
  const N = sans.length
  const mine = useMemo(() => sans.map((_, i) => i).filter((i) => i >= d.start && (i % 2 === 0 ? 'white' : 'black') === d.side), [sans, d.start, d.side])

  const g = useRef(new Chess())
  const ply = useRef(d.start)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const hints = useRef(0)
  const [, force] = useState(0)
  const [solved, setSolved] = useState(false)
  const [last, setLast] = useState<[Key, Key] | undefined>()
  const [extra, setExtra] = useState<{ arrows?: Arrow[]; marks?: string[] }>({})
  const [status, setStatus] = useState<Status>({ kind: 'info', msg: '' })
  const [flipped, setFlipped] = useState(false)
  const [shake, setShake] = useState<'' | 'ok' | 'no'>('')
  const onSolvedRef = useRef(onSolved)
  onSolvedRef.current = onSolved

  const other = d.side === 'white' ? 'Black' : 'White'
  const rerender = () => force((n) => n + 1)
  const pulse = (k: 'ok' | 'no') => { setShake(''); requestAnimationFrame(() => setShake(k)) }

  const finish = () => {
    setSolved(true)
    setStatus({ kind: 'win', msg: d.success })
    sound.win()
    onSolvedRef.current?.()
  }

  const reply = () => {
    if (ply.current >= N) return finish()
    const m = g.current.move(sans[ply.current])
    ply.current++
    playMoveSound(m.san)
    setLast([m.from as Key, m.to as Key])
    rerender()
    if (ply.current >= N) return finish()
    setStatus({ kind: 'info', msg: <>{other} played <b className="mono">{moveLabel(ply.current - 1, m.san)}</b>. Your move.</> })
  }

  const reset = () => {
    clearTimeout(timer.current)
    g.current = new Chess()
    for (let i = 0; i < d.start; i++) g.current.move(sans[i])
    ply.current = d.start
    hints.current = 0
    setSolved(false)
    setExtra({})
    const p = pos[d.start]
    setLast(p.from && p.to ? [p.from, p.to] : undefined)
    if (colorOf(g.current.turn()) === d.side) setStatus({ kind: 'info', msg: 'Your move. Drag a piece, or click it and then click a square.' })
    else {
      setStatus({ kind: 'info', msg: 'Watch the first move…' })
      timer.current = setTimeout(reply, 700)
    }
    rerender()
  }

  useEffect(() => {
    reset()
    return () => clearTimeout(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [d])

  const onMove = (from: Key, to: Key) => {
    let m
    try {
      m = g.current.move({ from, to, promotion: 'q' })
    } catch {
      return rerender()
    }
    setExtra({})
    if (norm(m.san) === norm(sans[ply.current])) {
      ply.current++
      hints.current = 0
      playMoveSound(m.san)
      setLast([from, to])
      pulse('ok')
      rerender()
      if (ply.current >= N) return finish()
      sound.good()
      setStatus({ kind: 'good', msg: <>Correct: <b className="mono">{moveLabel(ply.current - 1, m.san)}</b></> })
      timer.current = setTimeout(reply, 650)
    } else {
      setLast([from, to])
      pulse('no')
      sound.bad()
      rerender()
      setStatus({ kind: 'bad', msg: <><b className="mono">{moveLabel(ply.current, m.san)}</b> is legal, but it isn't the move we're practising. Try again.</> })
      timer.current = setTimeout(() => {
        g.current.undo()
        const p = pos[ply.current]
        setLast(p.from && p.to ? [p.from, p.to] : undefined)
        rerender()
      }, 700)
    }
  }

  const yours = !solved && colorOf(g.current.turn()) === d.side
  const expected = () => new Chess(g.current.fen()).move(sans[ply.current])
  const hint = () => {
    if (!yours) return
    const m = expected()
    hints.current++
    setExtra({ marks: [m.from] })
    setStatus({ kind: 'info', msg: d.hints?.[hints.current - 1] ?? `Look at the piece on ${m.from}.` })
  }
  const showMove = () => {
    if (!yours) return
    const m = expected()
    setExtra({ arrows: [[m.from, m.to, 'green']] })
    setStatus({ kind: 'info', msg: <>The move is <b className="mono">{moveLabel(ply.current, m.san)}</b>. Now play it on the board.</> })
  }

  const done = mine.filter((i) => i < ply.current).length
  const icon = { info: 'target', good: 'check', bad: 'x', win: 'trophy' } as const
  return (
    <div className="drill">
      <div className="dr-board">
        <Board
          fen={g.current.fen()}
          orientation={flipped ? (d.side === 'white' ? 'black' : 'white') : d.side}
          lastMove={last}
          check={g.current.inCheck()}
          arrows={extra.arrows}
          marks={extra.marks}
          className={shake}
          movable={{ color: d.side, dests: yours ? dests(g.current) : new Map(), onMove }}
        />
        <BoardTools onFlip={() => setFlipped((f) => !f)} />
      </div>
      <div className="dr-panel card">
        <span className="eyebrow">{d.title ?? 'Your turn'}</span>
        <p className="dr-prompt">{d.prompt}</p>
        <div className={`status${status.kind === 'info' ? '' : ' ' + status.kind}`} role="status">
          <Icon name={icon[status.kind]} />
          <span>{status.msg}</span>
        </div>
        <div className="pips">
          {mine.map((_, i) => <i key={i} className={i < done ? 'on' : ''} />)}
          <span>{done} of {mine.length} moves</span>
        </div>
        <div className="btnrow">
          <button className="btn sm" onClick={hint} disabled={!yours}><Icon name="bulb" /> Hint</button>
          <button className="btn sm" onClick={showMove} disabled={!yours}><Icon name="eye" /> Show move</button>
          <button className="btn sm" onClick={reset}><Icon name="restart" /> Restart</button>
        </div>
      </div>
    </div>
  )
}
