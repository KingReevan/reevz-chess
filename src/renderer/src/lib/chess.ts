import { Chess } from 'chess.js'
import type { Key } from 'chessground/types'

export type Color = 'white' | 'black'
export const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export interface Pos {
  fen: string
  from?: Key
  to?: Key
  san?: string
  check: boolean
  turn: Color
}

export const tokens = (moves: string | string[]): string[] =>
  Array.isArray(moves) ? moves : moves.trim().split(/\s+/).filter(Boolean)

export const colorOf = (t: 'w' | 'b'): Color => (t === 'w' ? 'white' : 'black')
export const other = (c: Color): Color => (c === 'white' ? 'black' : 'white')

/** Every position along a line, starting with the initial position. */
export function walk(moves: string | string[]): Pos[] {
  const g = new Chess()
  const out: Pos[] = [{ fen: g.fen(), check: false, turn: 'white' }]
  for (const t of tokens(moves)) {
    const m = g.move(t)
    out.push({ fen: g.fen(), from: m.from as Key, to: m.to as Key, san: m.san, check: g.inCheck(), turn: colorOf(g.turn()) })
  }
  return out
}

export function fenAfter(moves: string | string[]): string {
  const p = walk(moves)
  return p[p.length - 1].fen
}

export function lastMove(moves: string | string[]): [Key, Key] | undefined {
  const p = walk(moves)
  const l = p[p.length - 1]
  return l.from && l.to ? [l.from, l.to] : undefined
}

/** Legal destinations for chessground. */
export function dests(g: Chess): Map<Key, Key[]> {
  const d = new Map<Key, Key[]>()
  for (const m of g.moves({ verbose: true })) {
    const list = d.get(m.from as Key) ?? []
    list.push(m.to as Key)
    d.set(m.from as Key, list)
  }
  return d
}

/** "5." / "5..." prefix for the move at index i (0-based ply). */
export const moveNo = (i: number): string => (i % 2 === 0 ? `${i / 2 + 1}.` : `${Math.floor(i / 2) + 1}...`)
export const moveLabel = (i: number, san: string): string => moveNo(i) + san

/** "3...a6 4.Ba4 Nf6" style text, numbering correctly from any start ply. */
export function lineText(moves: string | string[], start = 0, end?: number): string {
  const t = tokens(moves).slice(0, end)
  return t
    .slice(start)
    .map((m, j) => {
      const i = start + j
      if (i % 2 === 0) return `${i / 2 + 1}.${m}`
      return j === 0 ? `${Math.floor(i / 2) + 1}...${m}` : m
    })
    .join(' ')
}

export const norm = (s: string): string => s.replace(/[+#!?]/g, '')
export const sameLine = (a: string[], b: string[]): boolean => a.length === b.length && a.every((s, i) => norm(s) === norm(b[i]))
export const isPrefix = (pre: string[], line: string[]): boolean => pre.length <= line.length && pre.every((s, i) => norm(s) === norm(line[i]))
