import type { BookLine, Opening } from '@content'
import { isPrefix, norm } from './chess'

export interface Bot {
  id: string
  name: string
  elo: number
  glyph: string
  blurb: string
  hi: string
  /** Stockfish "Skill Level" 0–20 once the bot leaves the book. */
  skill: number
  depth?: number
  movetime?: number
  /** Chance of playing a random legal move instead of the engine move. */
  blunder: number
  /** Lines this bot likes to steer into. */
  likes?: RegExp
  /** Plays the mistakes in trap lines, so you can practise punishing them. */
  fallsForTraps?: boolean
}

export const BOTS: Bot[] = [
  { id: 'pepe', name: 'Pepe', elo: 600, glyph: '♟', blurb: 'Plays fast and falls for traps. Good for practising tricks.', hi: "¡Hola! I learned the Ruy Lopez yesterday. Let's go!", skill: 0, depth: 1, blunder: 0.3, fallsForTraps: true },
  { id: 'lucia', name: 'Lucía', elo: 1100, glyph: '♞', blurb: 'Follows the main lines from the course, then plays sensibly.', hi: "Let's see if you remember your lines.", skill: 3, depth: 4, blunder: 0.08 },
  { id: 'toro', name: 'El Toro', elo: 1600, glyph: '♜', blurb: 'Loves sharp lines: the Marshall Attack and the Schliemann.', hi: 'I charge at kings. Ready?', skill: 8, depth: 8, blunder: 0, likes: /marshall|schliemann|gambit|dilworth|riga/i },
  { id: 'ruy', name: 'Don Ruy', elo: 2200, glyph: '♚', blurb: 'Knows every line in the course, then plays like a master.', hi: 'I wrote the book on this. Literally, in 1561.', skill: 16, movetime: 900, blunder: 0 }
]
export const botById = (id: string) => BOTS.find((b) => b.id === id) ?? BOTS[1]

const WEIGHT: Record<BookLine['status'], number> = { popular: 6, respectable: 3, rare: 1, historical: 1, dubious: 0.4, trap: 0 }

export interface Candidate {
  san: string
  weight: number
  lines: BookLine[]
}

/** Book continuations from this position, most common first. Without a bot, trap lines are left out. */
export function candidates(op: Opening, hist: string[], bot?: Bot): Candidate[] {
  const out = new Map<string, Candidate>()
  for (const l of op.book) {
    if (l.moves.length <= hist.length || !isPrefix(hist, l.moves)) continue
    let w = WEIGHT[l.status]
    if (l.status === 'trap') w = bot?.fallsForTraps ? 4 : 0
    if (bot?.likes?.test(l.name)) w *= 6
    if (w <= 0) continue
    const san = norm(l.moves[hist.length])
    const c = out.get(san) ?? { san, weight: 0, lines: [] }
    c.weight += w
    c.lines.push(l)
    out.set(san, c)
  }
  return [...out.values()].sort((a, b) => b.weight - a.weight)
}

export function pickWeighted(c: Candidate[]): Candidate {
  let r = Math.random() * c.reduce((a, x) => a + x.weight, 0)
  for (const x of c) {
    r -= x.weight
    if (r <= 0) return x
  }
  return c[c.length - 1]
}

export interface OpeningInfo {
  name: string
  sub: string
  out: boolean
  moduleId?: string
}

/** Names the opening reached so far and links it to the closest module. */
export function openingInfo(op: Opening, hist: string[]): OpeningInfo {
  let best: BookLine | null = null
  for (const l of op.book) if (l.status !== 'trap' && isPrefix(l.moves, hist) && (!best || l.moves.length > best.moves.length)) best = l
  let mod: { id: string; len: number } | null = null
  for (const m of Object.values(op.modules)) {
    const k = m.key.moves.trim().split(/\s+/)
    if (isPrefix(k, hist) && (!mod || k.length > mod.len)) mod = { id: m.id, len: k.length }
  }
  const next = candidates(op, hist)
  if (!best) {
    if (!hist.length) return { name: 'Starting position', sub: 'Play 1.e4 to head for the Ruy Lopez.', out: false }
    if (next.length) return { name: 'Heading for the Ruy Lopez', sub: 'Keep following the course moves.', out: false, moduleId: mod?.id }
    return { name: 'Out of the course', sub: 'No course line matches these moves.', out: true, moduleId: mod?.id }
  }
  const out = !next.length && hist.length > best.moves.length
  const sub = out ? `Left the book after move ${Math.ceil(best.moves.length / 2)}` : `${best.eco} · ${best.status}`
  return { name: best.name, sub, out, moduleId: mod?.id }
}
