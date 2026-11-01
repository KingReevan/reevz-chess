import { useMemo, useRef, useState } from 'react'
import type { Opening, Question } from '@content'
import { Icon } from '../components/Icon'
import { QuestionCard } from '../components/Quiz'
import { Bar, StageBar, HOME_CRUMB } from '../components/bits'
import { ordered } from '../lib/content'
import { doneCount, examPassed } from '../lib/progress'
import { sound } from '../lib/sound'
import { useLive, useStore } from '../lib/store'

const EXAM_SIZE = 50
const PASS = 80
const TYPES = ['Name the variation', 'Find the move', 'Explain the plan', 'Spot the trap', 'Fix the move order', 'Key concepts']

interface Item { q: Question; chapter: number; module: string }

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}

/** Draws questions round-robin across chapters so every chapter is tested. */
function drawExam(op: Opening, size: number, from: 'exam' | 'quiz' = 'exam'): Item[] {
  const byCh = new Map<number, Item[]>()
  for (const { m, ch } of ordered(op)) for (const q of m[from]) byCh.set(ch.n, [...(byCh.get(ch.n) ?? []), { q, chapter: ch.n, module: m.id }])
  const piles = [...byCh.values()].map(shuffle)
  const out: Item[] = []
  while (out.length < size && piles.some((p) => p.length)) for (const p of piles) if (p.length && out.length < size) out.push(p.pop()!)
  return shuffle(out)
}

function Session({ op, items, practice, onExit }: { op: Opening; items: Item[]; practice: boolean; onExit: () => void }) {
  const [i, setI] = useState(0)
  const [answered, setAnswered] = useState(false)
  const results = useRef<boolean[]>([])
  const [finished, setFinished] = useState(false)
  const recordExam = useStore((s) => s.recordExam)
  const burst = useLive((s) => s.burst)
  const resultRef = useRef<HTMLDivElement>(null)
  const item = items[i]

  const next = () => {
    if (i + 1 < items.length) {
      setI(i + 1)
      setAnswered(false)
      document.querySelector('.stage')?.scrollTo({ top: 0 })
      return
    }
    setFinished(true)
    const score = Math.round((results.current.filter(Boolean).length / items.length) * 100)
    if (!practice) {
      recordExam(op.id, score)
      if (score >= PASS) {
        sound.win()
        examPassed(op)
        setTimeout(() => { const r = resultRef.current?.getBoundingClientRect(); if (r) burst(r.left + r.width / 2, r.top + 40) }, 100)
      }
    }
  }

  if (finished) {
    const right = results.current.filter(Boolean).length
    const score = Math.round((right / items.length) * 100)
    const byCh = new Map<number, [number, number]>()
    items.forEach((it, k) => { const [a, b] = byCh.get(it.chapter) ?? [0, 0]; byCh.set(it.chapter, [a + (results.current[k] ? 1 : 0), b + 1]) })
    const pass = score >= PASS
    return (
      <div ref={resultRef} className={`card result${pass && !practice ? ' pass' : ''}`}>
        <span className="eyebrow">{practice ? 'Practice round' : pass ? 'Passed' : 'Not yet'}</span>
        <div className="scorebig">{score}%</div>
        <p>{right} of {items.length} right on the first try. {practice ? '' : pass ? `You have mastered the ${op.name} course. Well played!` : `You need ${PASS}% to pass. Review the weak chapters below and try again.`}</p>
        <div className="chbars">
          {[...byCh.entries()].sort((a, b) => a[0] - b[0]).map(([n, [a, b]]) => (
            <div key={n} title={op.chapters[n - 1]?.title}><span>{n}</span><Bar value={a / b} /><span>{a}/{b}</span></div>
          ))}
        </div>
        <div className="btnrow"><button className="btn primary" onClick={onExit}>Done</button></div>
      </div>
    )
  }

  return (
    <div className="sec">
      <div className="examq-head">
        <span className="eyebrow">{practice ? 'Practice question' : 'Question'} {i + 1} of {items.length} · Chapter {item.chapter}</span>
        <button className="btn sm" onClick={onExit}>Quit</button>
      </div>
      <Bar value={i / items.length} />
      <QuestionCard key={i} q={item.q} n={i + 1} boardWidth={380} onAnswered={(first) => { results.current[i] = first; setAnswered(true) }} />
      <div className="btnrow">
        <button className="btn primary" disabled={!answered} onClick={next}>{i + 1 < items.length ? 'Next question' : 'See my score'} <Icon name="arrowR" /></button>
      </div>
    </div>
  )
}

export function ExamView({ op }: { op: Opening }) {
  const done = useStore((s) => s.done)
  const best = useStore((s) => s.examBest[op.id])
  const total = ordered(op).length
  const n = doneCount(op, done)
  const unlocked = total > 0 && n === total
  const pool = useMemo(() => ordered(op).reduce((a, { m }) => a + m.exam.length, 0), [op])
  const [session, setSession] = useState<{ items: Item[]; practice: boolean } | null>(null)

  return (
    <>
      <StageBar crumbs={[HOME_CRUMB, { label: op.name, to: { type: 'overview' } }, 'Final exam']} />
      <div className="inner">
        <header className="l-head">
          <p className="eyebrow">Revision and mastery</p>
          <h1 className="l-title">Final exam</h1>
        </header>
        {session ? (
          <Session op={op} items={session.items} practice={session.practice} onExit={() => setSession(null)} />
        ) : (
          <>
            <div className="card exam-top">
              <span className={`lockbadge${unlocked ? ' open' : ''}`}><Icon name={unlocked ? 'trophy' : 'lock'} /></span>
              <div>
                <div className="flash-name" style={{ fontSize: 'var(--t-lg)' }}>{unlocked ? 'Ready when you are' : 'Unlocks after the last module'}</div>
                <p className="fine">
                  {unlocked
                    ? best !== undefined ? `Your best score: ${best}%. Retake it any time.` : `${Math.min(EXAM_SIZE, pool)} questions drawn from every chapter.`
                    : `${total - n} module${total - n === 1 ? '' : 's'} to go. Finish them all and the exam opens here.`}
                </p>
                <div className="oc-row"><Bar value={total ? n / total : 0} /><span className="count">{n}/{total}</span></div>
              </div>
            </div>
            <div className="facts">
              <div className="card fact"><b>{Math.min(EXAM_SIZE, pool)}</b><span>questions</span></div>
              <div className="card fact"><b>~45 min</b><span>no time limit</span></div>
              <div className="card fact"><b>{PASS}%</b><span>to pass</span></div>
              <div className="card fact"><b>{best !== undefined ? `${best}%` : 'Retake'}</b><span>{best !== undefined ? 'best score' : 'as often as you like'}</span></div>
            </div>
            <section className="sec">
              <div className="sec-h"><h2>Question types</h2></div>
              <div className="chips">{TYPES.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            </section>
            <div className="btnrow">
              <button className="btn primary" disabled={!unlocked} onClick={() => setSession({ items: drawExam(op, EXAM_SIZE), practice: false })}>
                <Icon name="trophy" /> Start the final exam
              </button>
              <button className="btn" disabled={pool === 0} onClick={() => setSession({ items: drawExam(op, 5, 'quiz'), practice: true })}>
                <Icon name="target" /> Try 5 practice questions
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
