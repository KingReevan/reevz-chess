/** A small spaced-repetition scheduler (a simplified SM-2). */
export interface Card { due: number; interval: number; reps: number; ease: number }
export type Grade = 'again' | 'good' | 'easy'

const DAY = 86_400_000
const MIN = 60_000

/** New cards come back the next day: the first review after learning matters most. */
export const newCard = (now: number = Date.now()): Card => ({ due: now + DAY, interval: 1, reps: 0, ease: 2.5 })

export function grade(c: Card, g: Grade, now: number = Date.now()): Card {
  if (g === 'again') return { due: now + 10 * MIN, interval: 1, reps: 0, ease: Math.max(1.3, c.ease - 0.2) }
  const ease = g === 'easy' ? c.ease + 0.15 : c.ease
  const interval = c.reps === 0 ? (g === 'easy' ? 4 : 1) : Math.round(c.interval * (g === 'easy' ? ease * 1.3 : ease))
  return { due: now + interval * DAY, interval, reps: c.reps + 1, ease }
}

/** Human-readable next interval for a grade button, e.g. "in 3 days". */
export function preview(c: Card | undefined, g: Grade, now: number = Date.now()): string {
  const n = grade(c ?? newCard(now), g, now)
  const ms = n.due - now
  if (ms < DAY) return 'in 10 min'
  const d = Math.round(ms / DAY)
  return d === 1 ? 'tomorrow' : `in ${d} days`
}
