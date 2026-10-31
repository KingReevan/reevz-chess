import { useEffect, useRef, useState } from 'react'
import { Confetti, TitleBar, Toasts } from './components/Chrome'
import { LeftSidebar } from './components/LeftSidebar'
import { RightRail } from './components/RightRail'
import { chapterKey, chapterOf, opening } from './lib/content'
import { setSoundEnabled } from './lib/sound'
import { useLive, useStore } from './lib/store'
import { ExamView } from './views/ExamView'
import { HomeView } from './views/HomeView'
import { ModuleView } from './views/ModuleView'
import { OverviewView } from './views/OverviewView'
import { PlayView } from './views/PlayView'
import { ReviewView } from './views/ReviewView'
import { SettingsView } from './views/SettingsView'

const NARROW = 1180

function useResolvedTheme() {
  const pref = useStore((s) => s.theme)
  const [system, setSystem] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)
  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme: dark)')
    const on = () => setSystem(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  const theme = pref === 'system' ? (system ? 'dark' : 'light') : pref
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.reevz?.setTitleBarTheme(theme)
  }, [theme])
  return theme
}

export function App() {
  const s = useStore()
  const op = opening(s.openingId)
  const toast = useLive((x) => x.toast)
  const stage = useRef<HTMLElement>(null)
  const [update, setUpdate] = useState<string | null>(null)
  const theme = useResolvedTheme()

  // A saved view can point at a module that no longer exists after an update.
  const view = s.view.type === 'module' && !op.modules[s.view.id] ? { type: 'overview' as const } : s.view
  // The home grid (and Settings opened from it) is the library: no course sidebars.
  const library = view.type === 'home' || (view.type === 'settings' && view.from === 'home')

  useEffect(() => { document.documentElement.dataset.board = s.board }, [s.board])
  useEffect(() => { setSoundEnabled(s.sound) }, [s.sound])
  useEffect(() => {
    stage.current?.scrollTo({ top: 0 })
    if (view.type === 'module') s.toggleChapter(chapterKey(op, chapterOf(op, view.id).id), true)
    if (window.innerWidth <= NARROW && s.rightOpen) s.set({ rightOpen: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view.type, view.type === 'module' ? view.id : '', op.id])

  useEffect(() => {
    if (window.innerWidth <= NARROW) s.set({ rightOpen: false })
    const off = window.reevz?.onUpdateReady((v) => {
      setUpdate(v)
      toast({ html: `Version ${v} is ready.`, action: { label: 'Restart now', run: () => window.reevz?.installUpdate() } })
    })
    const onKey = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      const k = e.key.toLowerCase()
      const st = useStore.getState()
      if (k === 'k') { e.preventDefault(); st.set({ leftOpen: true }); setTimeout(() => (document.getElementById('search') as HTMLInputElement | null)?.focus(), 50) }
      if (k === 'b') { e.preventDefault(); st.set({ leftOpen: !st.leftOpen }) }
      if (k === 'j') { e.preventDefault(); st.set({ rightOpen: !st.rightOpen }) }
    }
    window.addEventListener('keydown', onKey)
    return () => { off?.(); window.removeEventListener('keydown', onKey) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let title = op.name
  let body: React.ReactNode
  switch (view.type) {
    case 'home': title = 'All openings'; body = <HomeView />; break
    case 'module': {
      const m = op.modules[view.id]
      title = `${op.name} · Module ${m.id}`
      body = <ModuleView op={op} m={m} ch={chapterOf(op, m.id)} />
      break
    }
    case 'review': title = `${op.name} · Revision hub`; body = <ReviewView op={op} />; break
    case 'exam': title = `${op.name} · Final exam`; body = <ExamView op={op} />; break
    case 'play': title = 'Practice game'; body = <PlayView op={op} />; break
    case 'settings': title = 'Settings'; body = <SettingsView />; break
    default: title = `${op.name} · Course overview`; body = <OverviewView op={op} />
  }

  return (
    <div className="app" data-theme-resolved={theme}>
      <TitleBar title={title} update={update} library={library} />
      {library ? (
        <div className="ws lib">
          <main className="stage" ref={stage} tabIndex={-1}>{body}</main>
        </div>
      ) : (
        <div className={`ws${s.leftOpen ? '' : ' l-off'}${s.rightOpen ? '' : ' r-off'}`}>
          <LeftSidebar op={op} />
          <main className="stage" ref={stage} tabIndex={-1}>{body}</main>
          <RightRail op={op} />
          <div className="scrim" onClick={() => s.set({ rightOpen: false })} />
        </div>
      )}
      <Confetti />
      <Toasts />
    </div>
  )
}
