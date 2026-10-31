import { describe, expect, it } from 'vitest'
import { addDays, dayKey, lastWeek, streaks } from '../src/renderer/src/lib/dates'
import { grade, newCard, preview } from '../src/renderer/src/lib/srs'
import { isPrefix, lineText, moveLabel, walk } from '../src/renderer/src/lib/chess'

const today = new Date('2026-10-31T12:00:00')
const days = (...offsets: number[]) => Object.fromEntries(offsets.map((o) => [dayKey(addDays(today, o)), 1]))

describe('streaks', () => {
  it('counts consecutive days ending today', () => expect(streaks(days(0, -1, -2), today).current).toBe(3))
  it('keeps the streak alive if today is not done yet', () => expect(streaks(days(-1, -2), today).current).toBe(2))
  it('breaks after a missed day', () => expect(streaks(days(0, -2, -3), today).current).toBe(1))
  it('remembers the best run', () => expect(streaks(days(0, -5, -6, -7, -8), today)).toEqual({ current: 1, best: 4 }))
  it('is zero with no activity', () => expect(streaks({}, today)).toEqual({ current: 0, best: 0 }))
  it('lists the last seven days, today last', () => {
    const w = lastWeek(days(0), today)
    expect(w).toHaveLength(7)
    expect(w[6]).toMatchObject({ today: true, n: 1, label: 'S' })
  })
})

describe('spaced repetition', () => {
  const now = Date.UTC(2026, 9, 31)
  it('new cards come back tomorrow', () => expect(newCard(now).due - now).toBe(86_400_000))
  it('"again" brings a card back in ten minutes', () => expect(grade(newCard(now), 'again', now).due - now).toBe(600_000))
  it('intervals grow with each good answer', () => {
    let c = newCard(now)
    const gaps: number[] = []
    for (let i = 0; i < 4; i++) { c = grade(c, 'good', now); gaps.push(c.interval) }
    expect(gaps[0]).toBe(1)
    for (let i = 1; i < gaps.length; i++) expect(gaps[i]).toBeGreaterThan(gaps[i - 1])
  })
  it('"easy" schedules further out than "good"', () => expect(grade(newCard(now), 'easy', now).due).toBeGreaterThan(grade(newCard(now), 'good', now).due))
  it('describes the next interval', () => expect(preview(undefined, 'again', now)).toBe('in 10 min'))
})

describe('chess helpers', () => {
  it('numbers moves from any starting point', () => {
    expect(lineText('e4 e5 Nf3 Nc6 Bb5 a6 Ba4', 5)).toBe('3...a6 4.Ba4')
    expect(moveLabel(5, 'a6')).toBe('3...a6')
    expect(moveLabel(4, 'Bb5')).toBe('3.Bb5')
  })
  it('walks a line and flags checks', () => {
    const p = walk('e4 e5 Nf3 Nc6 Bb5 a6 Bxc6 dxc6 Nxe5 Qd4 Nf3 Qxe4+')
    expect(p).toHaveLength(13)
    expect(p[12].check).toBe(true)
    expect(p[12].turn).toBe('white')
  })
  it('matches prefixes while ignoring check marks', () => expect(isPrefix(['e4', 'e5', 'Qh5'], ['e4', 'e5', 'Qh5+', 'Nc6'])).toBe(true))
})
