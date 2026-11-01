import type { BookLine, BotLevel, BotPersona, Opening } from '@content'
import { isPrefix, moveLabel, norm, tokens } from './chess'

/** How strong each bot plays. Names and personalities come from the course (Opening.bots). */
interface Strength {
  level: BotLevel
  elo: number
  /** Stockfish "Skill Level" 0–20 once the bot leaves the book. */
  skill: number
  depth?: number
  movetime?: number
  /** Chance of playing a random legal move instead of the engine move. */
  blunder: number
  /** Plays the mistakes in trap lines, so you can practise punishing them. */
  fallsForTraps?: boolean
}

const STRENGTHS: Strength[] = [
  { level: 'easy', elo: 600, skill: 0, depth: 1, blunder: 0.3, fallsForTraps: true },
  { level: 'club', elo: 1100, skill: 3, depth: 4, blunder: 0.08 },
  { level: 'sharp', elo: 1600, skill: 8, depth: 8, blunder: 0 },
  { level: 'master', elo: 2200, skill: 16, movetime: 900, blunder: 0 }
]

export type Bot = Strength & BotPersona & { id: BotLevel }

/** The four bots with this course's names and personalities. */
export const botsFor = (op: Opening): Bot[] => STRENGTHS.map((st) => ({ ...st, ...op.bots[st.level], id: st.level }))
export const botFor = (op: Opening, id: string): Bot => botsFor(op).find((b) => b.id === id) ?? botsFor(op)[1]

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
    if (!hist.length) return { name: 'Starting position', sub: `Play ${moveLabel(0, tokens(op.moves)[0])} to head for the ${op.name}.`, out: false }
    if (next.length) return { name: `Heading for the ${op.name}`, sub: 'Keep following the course moves.', out: false, moduleId: mod?.id }
    return { name: 'Out of the course', sub: 'No course line matches these moves.', out: true, moduleId: mod?.id }
  }
  const out = !next.length && hist.length > best.moves.length
  const sub = out ? `Left the book after move ${Math.ceil(best.moves.length / 2)}` : `${best.eco} · ${best.status}`
  return { name: best.name, sub, out, moduleId: mod?.id }
}
