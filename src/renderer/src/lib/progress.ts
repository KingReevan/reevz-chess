import type { Opening } from '@content'
import { moduleKey, openings, ordered } from './content'
import { dayKey, streaks } from './dates'
import { sound } from './sound'
import { useLive, useStore } from './store'

export interface Achievement {
  id: string
  title: string
  desc: string
  glyph: string
}

/** Badges that don't belong to any one course. */
const FIRST: Achievement = { id: 'first', title: 'First Steps', desc: 'Finish your first module', glyph: '♙' }
const WEEK: Achievement = { id: 'week', title: 'Week Warrior', desc: 'Keep a 7-day streak', glyph: '♕' }

/** The badges shown for one course: the shared ones plus the course's own. */
export const badgesFor = (op: Opening): Achievement[] => [FIRST, ...op.badges, WEEK]
/** Every badge in the app. */
export const allBadges = (): Achievement[] => [FIRST, ...openings.flatMap((o) => o.badges), WEEK]

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
  const a = allBadges().find((x) => x.id === id)
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
  if (ch) {
    const [d, t] = chapterProgress(op, ch.id, after.done)
    if (d === t) for (const b of op.badges) if ('chapter' in b.for && b.for.chapter === ch.id) award(b.id)
  }
  if (streaks(after.activity).current >= 7) award('week')
}

/** Awards any badge for solving drill `index` of a module. */
export function drillSolved(op: Opening, moduleId: string, index: number) {
  for (const b of op.badges) if ('drill' in b.for && b.for.drill === `${moduleId}#${index}`) award(b.id)
}

/** Awards the course's final-exam badge. */
export function examPassed(op: Opening) {
  for (const b of op.badges) if ('exam' in b.for) award(b.id)
}
