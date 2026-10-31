/**
 * Content validator. Replays every move sequence in every course with chess.js and
 * checks the rules from content/types.ts. Run with `npm run test:content`.
 * Filter to one module with: npx vitest run tests/content.test.ts -t "module 2.2"
 */
import { describe, expect, it } from 'vitest'
import { Chess } from 'chess.js'
import { openings } from '../content'
import type { Chapter, Drill, Module, Question, Section, Step } from '../content/types'

const SQUARE = /^[a-h][1-8]$/
const COLORS = new Set(['green', 'red', 'yellow', 'blue'])
const ANNS = new Set(['!', '?', '!!', '??', '!?', '?!'])
const PLACEHOLDER = /\b(TODO|TBD|lorem|ipsum|FIXME)\b/i

interface Replay { sans: string[]; turns: ('w' | 'b')[]; error?: string }

/** Plays a SAN string from the start; requires every token to equal chess.js's own SAN. */
function replay(moves: string): Replay {
  const g = new Chess()
  const tokens = moves.trim().split(/\s+/).filter(Boolean)
  const out: Replay = { sans: [], turns: [] }
  for (let i = 0; i < tokens.length; i++) {
    const turn = g.turn()
    let san: string
    try {
      san = g.move(tokens[i]).san
    } catch {
      out.error = `illegal move ${i + 1} "${tokens[i]}" (after: ${tokens.slice(0, i).join(' ') || 'start'})`
      return out
    }
    if (san !== tokens[i]) {
      out.error = `move ${i + 1} written "${tokens[i]}" but chess.js writes "${san}"`
      return out
    }
    out.sans.push(san)
    out.turns.push(turn)
  }
  return out
}

function text(errs: string[], where: string, s: unknown, min = 1) {
  if (typeof s !== 'string' || s.trim().length < min) errs.push(`${where}: text missing or too short`)
  else if (PLACEHOLDER.test(s)) errs.push(`${where}: contains placeholder text`)
}

function checkStep(errs: string[], where: string, st: Step) {
  text(errs, `${where} title`, st.title, 2)
  text(errs, `${where} text`, st.text, 10)
  for (const a of st.arrows ?? []) {
    if (!SQUARE.test(a[0]) || !SQUARE.test(a[1]) || a[0] === a[1]) errs.push(`${where}: bad arrow ${JSON.stringify(a)}`)
    if (!COLORS.has(a[2])) errs.push(`${where}: arrow colour must be green, red, yellow or blue (${JSON.stringify(a)})`)
  }
  for (const m of st.marks ?? []) if (!SQUARE.test(m)) errs.push(`${where}: bad mark "${m}"`)
  if (st.ann !== undefined && !ANNS.has(st.ann)) errs.push(`${where}: bad annotation "${st.ann}"`)
}

function checkSection(errs: string[], where: string, s: Section) {
  if (s.kind === 'walkthrough') {
    text(errs, `${where} title`, s.title, 3)
    const r = replay(s.moves)
    if (r.error) return errs.push(`${where}: ${r.error}`)
    const n = r.sans.length
    if (!Number.isInteger(s.start) || s.start < 0 || s.start >= n) errs.push(`${where}: start ${s.start} must be between 0 and ${n - 1}`)
    if (n - s.start > 24) errs.push(`${where}: ${n - s.start} steps is too long for one walkthrough (max 24); start later or split it`)
    if (s.orientation !== 'white' && s.orientation !== 'black') errs.push(`${where}: orientation must be white or black`)
    for (let p = s.start; p <= n; p++) {
      if (!s.steps[p]) errs.push(`${where}: missing step ${p} (every position from start ${s.start} to ${n} needs a step)`)
      else checkStep(errs, `${where} step ${p}`, s.steps[p])
    }
    for (const k of Object.keys(s.steps)) if (+k < s.start || +k > n) errs.push(`${where}: step ${k} is outside ${s.start}–${n}`)
  } else if (s.kind === 'text') {
    text(errs, `${where} body`, s.body, 40)
  } else if (s.kind === 'tip' || s.kind === 'warning' || s.kind === 'history') {
    text(errs, `${where} title`, s.title, 3)
    text(errs, `${where} body`, s.body, 30)
  } else errs.push(`${where}: unknown section kind`)
}

function checkDrill(errs: string[], where: string, d: Drill) {
  text(errs, `${where} prompt`, d.prompt, 15)
  text(errs, `${where} success`, d.success, 10)
  const r = replay(d.moves)
  if (r.error) return errs.push(`${where}: ${r.error}`)
  const n = r.sans.length
  if (d.start < 0 || d.start >= n) errs.push(`${where}: start ${d.start} must be between 0 and ${n - 1}`)
  const me = d.side === 'white' ? 'w' : 'b'
  const mine = r.turns.slice(d.start).filter((t) => t === me).length
  if (mine < 1) errs.push(`${where}: the learner (${d.side}) has no moves to play`)
  if (r.turns[n - 1] !== me) errs.push(`${where}: the line must end with the learner's (${d.side}) move`)
  for (const h of d.hints ?? []) text(errs, `${where} hint`, h, 8)
}

function checkQuestion(errs: string[], where: string, q: Question) {
  text(errs, `${where} prompt`, q.prompt, 10)
  if (!['name', 'move', 'plan', 'trap', 'order', 'concept'].includes(q.type)) errs.push(`${where}: bad type "${q.type}"`)
  if (q.choices.length < 2 || q.choices.length > 4) errs.push(`${where}: needs 2–4 choices`)
  if (q.choices.filter((c) => c.correct).length !== 1) errs.push(`${where}: needs exactly one correct choice`)
  q.choices.forEach((c, i) => { text(errs, `${where} choice ${i + 1}`, c.text, 1); text(errs, `${where} choice ${i + 1} why`, c.why, 8) })
  if (new Set(q.choices.map((c) => c.text)).size !== q.choices.length) errs.push(`${where}: duplicate choices`)
  if (q.moves) { const r = replay(q.moves); if (r.error) errs.push(`${where}: ${r.error}`) }
}

export function checkModule(m: Module, ch: Chapter, expectedId: string): string[] {
  const errs: string[] = []
  if (m.id !== expectedId) errs.push(`id is "${m.id}" but the chapter lists "${expectedId}"`)
  text(errs, 'title', m.title, 4)
  if (m.title.length > 70) errs.push('title is longer than 70 characters')
  if (!(m.minutes >= 6 && m.minutes <= 15)) errs.push('minutes must be 6–15')
  if (![1, 2, 3, 4].includes(m.level)) errs.push('level must be 1–4')
  if (m.goals.length < 2 || m.goals.length > 4) errs.push('needs 2–4 goals')
  m.goals.forEach((g, i) => { text(errs, `goal ${i + 1}`, g, 8); if (g.length > 90) errs.push(`goal ${i + 1} is longer than 90 characters`) })
  text(errs, 'intro', m.intro, 40)
  text(errs, 'takeaway', m.takeaway, 20)
  if (m.lookAhead !== undefined) text(errs, 'lookAhead', m.lookAhead, 20)
  const walks = m.sections.filter((s) => s.kind === 'walkthrough').length
  if (walks < 2) errs.push(`needs at least 2 walkthroughs (has ${walks})`)
  m.sections.forEach((s, i) => checkSection(errs, `section ${i + 1} (${s.kind})`, s))
  if (m.drills.length < 1) errs.push('needs at least 1 drill')
  m.drills.forEach((d, i) => checkDrill(errs, `drill ${i + 1}`, d))
  if (m.quiz.length < 3) errs.push(`needs at least 3 quiz questions (has ${m.quiz.length})`)
  m.quiz.forEach((q, i) => checkQuestion(errs, `quiz ${i + 1}`, q))
  if (m.exam.length < 2) errs.push(`needs at least 2 exam questions (has ${m.exam.length})`)
  m.exam.forEach((q, i) => checkQuestion(errs, `exam ${i + 1}`, q))
  text(errs, 'key name', m.key?.name, 4)
  const k = replay(m.key?.moves ?? '')
  if (k.error) errs.push(`key: ${k.error}`)
  for (const t of m.terms ?? []) { text(errs, 'term', t.term, 2); text(errs, `term "${t.term}" meaning`, t.meaning, 10) }
  void ch
  return errs
}

for (const op of openings) {
  describe(op.name, () => {
    it('every module file is listed in a chapter, and ids are unique', () => {
      const listed = op.chapters.flatMap((c) => c.modules)
      expect(new Set(listed).size).toBe(listed.length)
      const extra = Object.keys(op.modules).filter((id) => !listed.includes(id))
      expect(extra, `module files not listed in chapters.ts: ${extra.join(', ')}`).toEqual([])
    })

    for (const ch of op.chapters) {
      for (const id of ch.modules) {
        it(`module ${id}`, () => {
          const m = op.modules[id]
          if (!m) throw new Error(`module ${id} is missing: create content/openings/${op.id}/modules/${id}.ts`)
          const errs = checkModule(m, ch, id)
          expect(errs, `\n  - ${errs.join('\n  - ')}`).toEqual([])
        })
      }
    }

    it('module titles are unique', () => {
      const titles = Object.values(op.modules).map((m) => m.title)
      expect(titles.length - new Set(titles).size).toBe(0)
    })

    it('the final exam pool has at least 50 questions', () => {
      const n = Object.values(op.modules).reduce((a, m) => a + m.exam.length, 0)
      expect(n).toBeGreaterThanOrEqual(50)
    })

    it('every opening-book line is legal', () => {
      for (const b of op.book) expect(replay(b.moves.join(' ')).error, b.id).toBeUndefined()
      expect(replay(op.moves).error).toBeUndefined()
    })
  })
}
