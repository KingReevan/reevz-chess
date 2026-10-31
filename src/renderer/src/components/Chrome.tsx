import { useEffect, useRef } from 'react'
import { useLive, useStore } from '../lib/store'
import logo from '../assets/logo.png'
import { Glyph, Icon } from './Icon'

export function TitleBar({ title, update }: { title: string; update: string | null }) {
  const s = useStore()
  const dark = document.documentElement.dataset.theme === 'dark'
  return (
    <header className="titlebar">
      <div className="tb-left">
        <button className="ibtn" aria-pressed={s.leftOpen} aria-label="Toggle course sidebar" title="Course sidebar (Ctrl+B)" onClick={() => s.set({ leftOpen: !s.leftOpen })}>
          <Icon name="panelLeft" />
        </button>
        <div className="brand"><img className="logo" src={logo} alt="" />Reevz Chess</div>
      </div>
      <div className="tb-mid">{title}</div>
      <div className="tb-right">
        {update && (
          <button className="update-pill" onClick={() => window.reevz?.installUpdate()}>
            <Icon name="download" /> Restart to update to {update}
          </button>
        )}
        <button className="ibtn" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title="Light / dark" onClick={() => s.set({ theme: dark ? 'light' : 'dark' })}>
          <Icon name={dark ? 'sun' : 'moon'} />
        </button>
        <button className="ibtn" aria-pressed={s.rightOpen} aria-label="Toggle coach sidebar" title="Coach sidebar (Ctrl+J)" onClick={() => s.set({ rightOpen: !s.rightOpen })}>
          <Icon name="panelRight" />
        </button>
      </div>
    </header>
  )
}

export function Toasts() {
  const toasts = useLive((s) => s.toasts)
  const dismiss = useLive((s) => s.dismiss)
  return (
    <div className="toasts" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast">
          {t.kind === 'medal' ? <span className="medal"><Glyph g={t.glyph ?? '♔'} /></span> : <Icon name="check" />}
          <span>{t.html}</span>
          {t.action && <button onClick={() => { t.action!.run(); dismiss(t.id) }}>{t.action.label}</button>}
        </div>
      ))}
    </div>
  )
}

/** Confetti (with a few flying knights) whenever something is completed. */
export function Confetti() {
  const burst = useLive((s) => s.confetti)
  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = canvas.current
    if (!burst || !cv || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = cv.getBoundingClientRect(), dpr = window.devicePixelRatio || 1
    cv.width = r.width * dpr
    cv.height = r.height * dpr
    const ctx = cv.getContext('2d')!
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    const cs = getComputedStyle(document.documentElement)
    const cols = ['--accent', '--brass', '--ar-yellow', '--ar-blue', '--ar-red'].map((v) => cs.getPropertyValue(v).trim())
    const ox = burst.x - r.left, oy = burst.y - r.top
    const parts = Array.from({ length: 160 }, () => ({
      x: ox, y: oy, vx: (Math.random() - 0.5) * 12, vy: -Math.random() * 12 - 4, s: Math.random() * 6 + 4,
      a: Math.random() * 6, va: (Math.random() - 0.5) * 0.3, c: cols[Math.floor(Math.random() * cols.length)], k: Math.random() < 0.2
    }))
    let t = 0, raf = 0
    const frame = () => {
      t++
      ctx.clearRect(0, 0, r.width, r.height)
      for (const p of parts) {
        p.vy += 0.3; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.a)
        ctx.globalAlpha = Math.max(0, 1 - t / 130)
        ctx.fillStyle = p.c
        if (p.k) { ctx.font = `${p.s * 3}px "Segoe UI Symbol", serif`; ctx.fillText('♞', -p.s, p.s) }
        else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2)
        ctx.restore()
      }
      if (t < 130) raf = requestAnimationFrame(frame)
      else ctx.clearRect(0, 0, r.width, r.height)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [burst])
  return <canvas ref={canvas} className="confetti" />
}
