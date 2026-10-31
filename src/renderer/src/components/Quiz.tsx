import { useMemo, useState } from 'react'
import type { Question } from '@content'
import { lastMove, walk } from '../lib/chess'
import { sound } from '../lib/sound'
import { Board } from './Board'
import { Icon } from './Icon'

/** One multiple-choice question. Wrong picks stay marked so the learner sees every explanation they triggered. */
export function QuestionCard({ q, n, onAnswered, boardWidth = 300 }: { q: Question; n: number; onAnswered?: (firstTry: boolean) => void; boardWidth?: number }) {
  const [picked, setPicked] = useState<number[]>([])
  const solved = picked.some((j) => q.choices[j].correct)
  const lastPick = picked[picked.length - 1]
  const pos = useMemo(() => (q.moves ? walk(q.moves) : null), [q.moves])
  const p = pos?.[pos.length - 1]

  const pick = (j: number) => {
    if (solved || picked.includes(j)) return
    const next = [...picked, j]
    setPicked(next)
    if (q.choices[j].correct) {
      sound.good()
      onAnswered?.(next.length === 1)
    } else sound.bad()
  }

  return (
    <div className="qz card">
      <p className="qz-q">
        <span className="qz-n">{n}</span>
        <span>{q.prompt}</span>
      </p>
      {p && (
        <div className="qz-board" style={{ maxWidth: boardWidth }}>
          <Board fen={p.fen} orientation={q.orientation ?? 'white'} lastMove={q.moves ? lastMove(q.moves) : undefined} check={p.check} />
        </div>
      )}
      <div className="qz-opts">
        {q.choices.map((c, j) => {
          const state = picked.includes(j) ? (c.correct ? 'ok' : 'no') : ''
          return (
            <button key={j} className={`qz-o ${state}`} onClick={() => pick(j)} disabled={solved || picked.includes(j)}>
              <span className="qz-k">{'ABCD'[j]}</span>
              <span>{c.text}</span>
              <span>{state === 'ok' ? <Icon name="check" /> : state === 'no' ? <Icon name="x" /> : null}</span>
            </button>
          )
        })}
      </div>
      <p className="qz-fb" role="status">
        {lastPick !== undefined && (
          <>
            <b>{q.choices[lastPick].correct ? 'Correct.' : 'Not quite.'}</b> {q.choices[lastPick].why}
          </>
        )}
      </p>
    </div>
  )
}

export function Quiz({ qs }: { qs: Question[] }) {
  const [score, setScore] = useState<{ answered: number; first: number }>({ answered: 0, first: 0 })
  return (
    <div className="quiz">
      {qs.map((q, i) => (
        <QuestionCard key={i} q={q} n={i + 1} onAnswered={(first) => setScore((s) => ({ answered: s.answered + 1, first: s.first + (first ? 1 : 0) }))} />
      ))}
      <p className="qz-score">
        {score.answered === 0
          ? `${qs.length} questions. Pick an answer to see why it's right or wrong.`
          : `${score.answered} of ${qs.length} answered · ${score.first} right on the first try.`}
      </p>
    </div>
  )
}
