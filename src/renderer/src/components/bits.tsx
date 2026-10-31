import type { Module, Side } from '@content'
import { useStore, type View } from '../lib/store'
import { Icon } from './Icon'

const SIDE_LABEL: Record<Side, string> = { white: 'White', black: 'Black', both: 'White · Black' }

export function SideDot({ side }: { side: Side }) {
  return <span className={`pm ${side}`} title={SIDE_LABEL[side]} />
}

export function SideChip({ side }: { side: Side }) {
  return (
    <span className="side">
      <SideDot side={side} />
      {SIDE_LABEL[side]}
    </span>
  )
}

export function LevelBars({ n }: { n: number }) {
  return <span className="lv" aria-hidden="true">{[1, 2, 3, 4].map((i) => <i key={i} className={i <= n ? 'on' : ''} />)}</span>
}

export function Bar({ value }: { value: number }) {
  return <span className="bar"><i style={{ width: `${Math.round(Math.min(1, Math.max(0, value)) * 100)}%` }} /></span>
}

/** A breadcrumb: plain text, or a link to another view. */
export type Crumb = string | { label: string; to: View }
/** First crumb of every page: back to the grid of openings. */
export const HOME_CRUMB: Crumb = { label: 'Openings', to: { type: 'home' } }

export function StageBar({ crumbs, prev, next }: { crumbs: Crumb[]; prev?: Module; next?: Module }) {
  const go = useStore((s) => s.go)
  const nav = prev !== undefined || next !== undefined
  return (
    <div className="stagebar">
      <nav className="crumbs" aria-label="Breadcrumb">
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: 'contents' }}>
            {i > 0 && <Icon name="right" />}
            {typeof c === 'string' ? <span>{c}</span> : <button className="crumb" onClick={() => go(c.to)}>{c.label}</button>}
          </span>
        ))}
      </nav>
      {nav && (
        <div className="navbtns">
          <button className="btn sm icon" disabled={!prev} title={prev ? `Previous: ${prev.id} ${prev.title}` : undefined} aria-label="Previous module" onClick={() => prev && go({ type: 'module', id: prev.id })}>
            <Icon name="left" />
          </button>
          <button className="btn sm icon" disabled={!next} title={next ? `Next: ${next.id} ${next.title}` : undefined} aria-label="Next module" onClick={() => next && go({ type: 'module', id: next.id })}>
            <Icon name="right" />
          </button>
        </div>
      )}
    </div>
  )
}

/** Progress ring used for the daily goal. */
export function Ring({ value, label }: { value: number; label: string }) {
  const C = 2 * Math.PI * 27
  return (
    <svg className="ring" viewBox="0 0 64 64" role="img" aria-label={label}>
      <circle className="bg" cx="32" cy="32" r="27" />
      <circle className="fg" cx="32" cy="32" r="27" strokeDasharray={C.toFixed(1)} strokeDashoffset={(C * (1 - Math.min(1, value))).toFixed(1)} transform="rotate(-90 32 32)" />
      <text x="32" y="37" textAnchor="middle">{label}</text>
    </svg>
  )
}
