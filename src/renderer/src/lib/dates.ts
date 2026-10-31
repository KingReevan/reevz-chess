/** Local calendar date as YYYY-MM-DD. */
export function dayKey(d: Date = new Date()): string {
  const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function addDays(d: Date, n: number): Date {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}

/** Current streak (days in a row with at least one finished module, ending today or yesterday) and the best ever. */
export function streaks(activity: Record<string, number>, today: Date = new Date()): { current: number; best: number } {
  const active = (d: Date) => (activity[dayKey(d)] ?? 0) > 0
  let current = 0
  let d = active(today) ? today : addDays(today, -1)
  while (active(d)) { current++; d = addDays(d, -1) }
  const days = Object.keys(activity).filter((k) => activity[k] > 0).sort()
  let best = 0, run = 0, prev: string | null = null
  for (const k of days) {
    run = prev && dayKey(addDays(new Date(prev + 'T12:00:00'), 1)) === k ? run + 1 : 1
    best = Math.max(best, run)
    prev = k
  }
  return { current, best: Math.max(best, current) }
}

/** The last 7 days, oldest first, with one-letter weekday labels. */
export function lastWeek(activity: Record<string, number>, today: Date = new Date()): { label: string; n: number; today: boolean }[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = addDays(today, i - 6)
    return { label: 'SMTWTFS'[d.getDay()], n: activity[dayKey(d)] ?? 0, today: i === 6 }
  })
}
