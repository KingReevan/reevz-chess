import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Walkthrough as W } from '@content'
import { moveLabel, other, tokens, walk } from '../lib/chess'
import { playMoveSound } from '../lib/sound'
import { useLive } from '../lib/store'
import { Board, BoardTools } from './Board'
import { Icon } from './Icon'

interface Props {
  w: W
  /** The Coach panel follows the walkthrough the learner touched last. */
  active: boolean
  onActivate: () => void
}

export function Walkthrough({ w, active, onActivate }: Props) {
  const pos = useMemo(() => walk(w.moves), [w.moves])
  const sans = useMemo(() => tokens(w.moves), [w.moves])
  const N = sans.length
  const [ply, setPly] = useState(w.start)
  const plyRef = useRef(w.start)
  const [flipped, setFlipped] = useState(false)
  const setCoach = useLive((s) => s.setCoach)

  const go = useCallback(
    (n: number) => {
      const next = Math.max(w.start, Math.min(N, n))
      if (next === plyRef.current + 1) playMoveSound(sans[next - 1])
      plyRef.current = next
      setPly(next)
    },
    [w.start, N, sans]
  )

  useEffect(() => {
    if (active) setCoach({ kind: 'line', moves: sans, ply, start: w.start, jump: go })
  }, [active, ply, sans, w.start, go, setCoach])

  const step = w.steps[ply]
  const p = pos[ply]
  const hasArrows = Object.values(w.steps).some((s) => s.arrows?.length)
  const total = N - w.start + 1

  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowLeft: ply - 1, ArrowRight: ply + 1, Home: w.start, End: N }
    if (e.key in map) {
      e.preventDefault()
      go(map[e.key])
    }
  }

  return (
    <div className="wt" tabIndex={0} onKeyDown={onKey} onFocus={onActivate} onPointerDown={onActivate} aria-label={`${w.title}. Use the left and right arrow keys to step through the moves.`}>
      <div className="wt-board">
        <Board
          fen={p.fen}
          orientation={flipped ? other(w.orientation) : w.orientation}
          lastMove={p.from && p.to ? [p.from, p.to] : undefined}
          check={p.check}
          arrows={step?.arrows}
          marks={step?.marks}
        />
        <BoardTools onFlip={() => setFlipped((f) => !f)} />
      </div>
      <div className="wt-panel card">
        {w.intro && <p className="wt-intro">{w.intro}</p>}
        <div className="wt-top">
          <span className="eyebrow">Step {ply - w.start + 1} of {total}</span>
          <div className="stepbar">{Array.from({ length: total }, (_, i) => <i key={i} className={i <= ply - w.start ? 'on' : ''} />)}</div>
        </div>
        <div className="wt-move">
          {ply ? moveLabel(ply - 1, sans[ply - 1]) : 'Start'}
          {step?.ann && <span className="ann">{step.ann}</span>}
        </div>
        <h3 className="wt-title">{step?.title}</h3>
        <p className="wt-text">{step?.text}</p>
        <div className="wt-ctrl">
          <button className="btn icon" onClick={() => go(w.start)} disabled={ply === w.start} aria-label="First step"><Icon name="first" /></button>
          <button className="btn icon" onClick={() => go(ply - 1)} disabled={ply === w.start} aria-label="Previous step"><Icon name="left" /></button>
          <button className="btn primary" onClick={() => go(ply + 1)} disabled={ply === N}>Next <Icon name="right" /></button>
          <button className="btn icon" onClick={() => go(N)} disabled={ply === N} aria-label="Last step"><Icon name="last" /></button>
        </div>
        {hasArrows && (
          <div className="legend">
            <span><i className="green" />good / defends</span>
            <span><i className="red" />attacks</span>
            <span><i className="yellow" />key idea</span>
            <span><i className="blue" />line / route</span>
          </div>
        )}
        <div className="mlist">
          {sans.map((san, i) => (
            <span key={i} style={{ display: 'contents' }}>
              {i % 2 === 0 && <span className="no">{i / 2 + 1}.</span>}
              <button className={`${i + 1 === ply ? 'cur' : ''}${i + 1 < w.start ? ' pre' : ''}`} onClick={() => go(i + 1)}>{san}</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
