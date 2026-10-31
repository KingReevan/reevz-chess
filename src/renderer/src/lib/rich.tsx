import { Fragment, type ReactNode } from 'react'

/** Renders the small markdown subset used in content: paragraphs, **bold** and *italic*. */
function inline(s: string): ReactNode[] {
  return s.split(/(\*\*[^*]+\*\*|\*[^*\s][^*]*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function Rich({ text, className = 'prose' }: { text: string; className?: string }) {
  return (
    <div className={className}>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i}>{inline(p.trim())}</p>
      ))}
    </div>
  )
}
