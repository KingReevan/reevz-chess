import type { Opening } from '@content'
import { moduleKey, ordered } from './content'
import { dayKey, streaks } from './dates'
import { sound } from './sound'
import { useLive, useStore } from './store'

export interface Achievement {
  id: string
  title: string
  desc: string
  glyph: string
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first', title: 'First Steps', desc: 'Finish your first module', glyph: '♙' },
  { id: 'fork', title: 'Fork Finder', desc: 'Solve the fork drill in Module 2.2', glyph: '♛' },
  { id: 'ch1', title: 'Solid Ground', desc: 'Finish Chapter 1', glyph: '♘' },
  { id: 'torture', title: 'Spanish Torture', desc: 'Finish the Closed Ruy Lopez', glyph: '♗' },
  { id: 'marshall', title: 'Marshall Law', desc: 'Finish the Marshall Attack', glyph: '♜' },
  { id: 'wall', title: 'Wall Builder', desc: 'Finish the Berlin Defense', glyph: '♖' },
  { id: 'week', title: 'Week Warrior', desc: 'Keep a 7-day streak', glyph: '♕' },
  { id: 'maestro', title: 'Maestro', desc: 'Pass the final exam', glyph: '♚' }
]

/** Badges for finishing a chapter, per opening. */
const CHAPTER_BADGE: Record<string, Record<string, string>> = { 'ruy-lopez': { c1: 'ch1', c4: 'torture', c5: 'marshall', c7: 'wall' } }

export const doneCount = (op: Opening, done: Record<string, number>) => ordered(op).filter(({ m }) => done[moduleKey(op, m.id)]).length
export const chapterProgress = (op: Opening, chId: string, done: Record<string, number>): [number, number] => {
  const ch = op.chapters.find((c) => c.id === chId)!
  const ids = ch.modules.filter((id) => op.modules[id])
  return [ids.filter((id) => done[moduleKey(op, id)]).length, ids.length]
}
export const todayCount = (activity: Record<string, number>) => activity[dayKey()] ?? 0

/** Awards a badge once and celebrates it. */
export function award(id: string) {
  if (!useStore.getState().award(id)) return
  const a = ACHIEVEMENTS.find((x) => x.id === id)
  if (!a) return
  setTimeout(() => {
    sound.win()
    useLive.getState().toast({ kind: 'medal', glyph: a.glyph, html: `Achievement unlocked: ${a.title}` })
  }, 600)
}

/** Marks a module complete, then handles streaks, goals, badges and the celebration. */
export function completeModule(op: Opening, id: string, from?: DOMRect) {
  const s = useStore.getState()
  const key = moduleKey(op, id)
  if (s.done[key]) return
  s.complete(key)
  const after = useStore.getState()
  const live = useLive.getState()
  if (from) live.burst(from.left + from.width / 2, from.top)
  sound.win()
  const total = ordered(op).length
  live.toast({ html: `Module ${id} complete · ${doneCount(op, after.done)} of ${total}` })

  if (todayCount(after.activity) === after.dailyGoal) setTimeout(() => live.toast({ html: `Daily goal reached: ${after.dailyGoal} module${after.dailyGoal > 1 ? 's' : ''} today` }), 1200)
  award('first')
  const ch = op.chapters.find((c) => c.modules.includes(id))
  const badge = ch && CHAPTER_BADGE[op.id]?.[ch.id]
  if (ch && badge) {
    const [d, t] = chapterProgress(op, ch.id, after.done)
    if (d === t) award(badge)
  }
  if (streaks(after.activity).current >= 7) award('week')
}
