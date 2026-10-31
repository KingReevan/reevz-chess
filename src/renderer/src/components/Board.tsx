import { useEffect, useRef } from 'react'
import { Chessground } from 'chessground'
import type { Api } from 'chessground/api'
import type { Config } from 'chessground/config'
import type { DrawShape } from 'chessground/draw'
import type { Key } from 'chessground/types'
import type { Arrow } from '@content'
import type { Color } from '../lib/chess'
import { useStore, type BoardTheme } from '../lib/store'
import { Icon } from './Icon'

export interface BoardProps {
  fen: string
  orientation: Color
  lastMove?: [Key, Key]
  /** Highlight the king of the side to move. */
  check?: boolean
  arrows?: Arrow[]
  marks?: string[]
  /** Pass to let the learner move pieces of `color`. */
  movable?: { color: Color; dests: Map<Key, Key[]>; onMove: (from: Key, to: Key) => void } | null
  mini?: boolean
  className?: string
}

const BRUSHES = {
  green: { key: 'g', color: '#1E8E4F', opacity: 0.9, lineWidth: 10 },
  red: { key: 'r', color: '#D9443A', opacity: 0.9, lineWidth: 10 },
  yellow: { key: 'y', color: '#E5A11A', opacity: 0.95, lineWidth: 10 },
  blue: { key: 'b', color: '#2F6FD6', opacity: 0.85, lineWidth: 10 }
}

/** Wraps chessground (the Lichess board). Every prop change is pushed into the board. */
export function Board(p: BoardProps) {
  const el = useRef<HTMLDivElement>(null)
  const api = useRef<Api | null>(null)
  const onMove = useRef(p.movable?.onMove)
  onMove.current = p.movable?.onMove

  const shapes = (): DrawShape[] => (p.arrows ?? []).map(([orig, dest, brush]) => ({ orig: orig as Key, dest: dest as Key, brush }))
  const config = (): Config => {
    const turn: Color = p.fen.split(' ')[1] === 'b' ? 'black' : 'white'
    return {
      fen: p.fen,
      orientation: p.orientation,
      turnColor: turn,
      lastMove: p.lastMove,
      check: p.check ? turn : false,
      coordinates: !p.mini,
      viewOnly: !p.movable,
      movable: {
        free: false,
        color: p.movable?.color,
        dests: p.movable?.dests ?? new Map(),
        showDests: true,
        events: { after: (o, d) => onMove.current?.(o, d) }
      },
      draggable: { enabled: !!p.movable, showGhost: true },
      selectable: { enabled: !!p.movable },
      premovable: { enabled: false },
      highlight: { lastMove: true, check: true, custom: new Map((p.marks ?? []).map((s) => [s as Key, 'mark'])) },
      drawable: { enabled: false, visible: true, brushes: BRUSHES, autoShapes: shapes() },
      animation: { enabled: !p.mini, duration: 220 },
      disableContextMenu: true
    }
  }

  useEffect(() => {
    if (!el.current) return
    api.current = Chessground(el.current, config())
    // Redraw on the next frame, and only when the size really changed, to avoid ResizeObserver loops.
    let width = el.current.clientWidth
    let frame = 0
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width)
      if (w === width) return
      width = w
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => api.current?.redrawAll())
    })
    ro.observe(el.current)
    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      api.current?.destroy()
      api.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!api.current) return
    api.current.set(config())
    api.current.setAutoShapes(shapes())
  })

  return (
    <div className={`board${p.mini ? ' mini' : ''}${p.className ? ' ' + p.className : ''}`}>
      <div ref={el} />
    </div>
  )
}

export const BOARD_THEMES: Record<BoardTheme, [string, string]> = {
  felt: ['#E4EAD6', '#84A48D'],
  walnut: ['#F0D9B5', '#B58863'],
  ice: ['#DEE4E7', '#8AA1AD'],
  slate: ['#C9C9C9', '#7D8A96']
}

export function BoardSwatches() {
  const board = useStore((s) => s.board)
  const set = useStore((s) => s.set)
  return (
    <div className="swatches" role="group" aria-label="Board colours">
      <span>Board</span>
      {(Object.keys(BOARD_THEMES) as BoardTheme[]).map((t) => (
        <button
          key={t}
          className="sw"
          aria-pressed={board === t}
          aria-label={`${t} board`}
          title={t}
          onClick={() => set({ board: t })}
          style={{ ['--l' as string]: BOARD_THEMES[t][0], ['--d' as string]: BOARD_THEMES[t][1] }}
        >
          <i /><i /><i /><i />
        </button>
      ))}
    </div>
  )
}

export function BoardTools({ onFlip }: { onFlip: () => void }) {
  return (
    <div className="bd-tools">
      <button className="btn sm" onClick={onFlip}>
        <Icon name="flip" /> Flip
      </button>
      <BoardSwatches />
    </div>
  )
}
