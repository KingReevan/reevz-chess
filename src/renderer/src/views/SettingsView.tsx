import { useEffect, useState } from 'react'
import { BoardSwatches } from '../components/Board'
import { Icon } from '../components/Icon'
import { StageBar, HOME_CRUMB } from '../components/bits'
import { useLive, useStore, type ThemePref } from '../lib/store'

export function SettingsView() {
  const s = useStore()
  const toast = useLive((x) => x.toast)
  const [version, setVersion] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    window.reevz?.version().then(setVersion).catch(() => {})
  }, [])

  const check = async () => {
    if (!window.reevz) return
    setChecking(true)
    const r = await window.reevz.checkForUpdates()
    setChecking(false)
    const msg = {
      dev: 'Updates are checked in the installed app, not in development mode.',
      latest: "You're on the latest version.",
      downloading: `Version ${r.version} is downloading. You'll be asked to restart when it's ready.`,
      error: "Couldn't reach GitHub. Check your internet connection and try again."
    }[r.status]
    toast({ html: msg })
  }

  return (
    <>
      <StageBar crumbs={[HOME_CRUMB, 'Settings']} />
      <div className="inner">
        <header className="l-head">
          <p className="eyebrow">Reevz Chess{version ? ` · version ${version}` : ''}</p>
          <h1 className="l-title">Settings</h1>
        </header>
        <div className="settings">
          <div className="card setrow">
            <div><b>Appearance</b><span>Follow Windows, or always use light or dark.</span></div>
            <div className="seg">
              {(['system', 'light', 'dark'] as ThemePref[]).map((t) => (
                <button key={t} aria-selected={s.theme === t} onClick={() => s.set({ theme: t })}>{t[0].toUpperCase() + t.slice(1)}</button>
              ))}
            </div>
          </div>
          <div className="card setrow">
            <div><b>Board colours</b><span>Used on every board in the app.</span></div>
            <BoardSwatches />
          </div>
          <div className="card setrow">
            <div><b>Daily goal</b><span>How many modules you want to finish on a normal day.</span></div>
            <div className="seg">
              {[1, 2, 3, 5].map((n) => (
                <button key={n} aria-selected={s.dailyGoal === n} onClick={() => s.set({ dailyGoal: n })}>{n}</button>
              ))}
            </div>
          </div>
          <div className="card setrow">
            <div><b>Sounds</b><span>Move clicks, correct-answer chimes and celebrations.</span></div>
            <div className="seg">
              <button aria-selected={s.sound} onClick={() => s.set({ sound: true })}>On</button>
              <button aria-selected={!s.sound} onClick={() => s.set({ sound: false })}>Off</button>
            </div>
          </div>
          <div className="card setrow">
            <div><b>Updates</b><span>New openings and fixes download automatically from GitHub.</span></div>
            <button className="btn" onClick={check} disabled={checking}><Icon name="download" /> {checking ? 'Checking…' : 'Check for updates'}</button>
          </div>
          <div className="card setrow">
            <div><b>Reset progress</b><span>Clears finished modules, streaks, flashcards, notes and badges. This can't be undone.</span></div>
            {confirmReset ? (
              <div className="confirm">
                <button className="btn danger" onClick={() => { s.reset(); setConfirmReset(false); toast({ html: 'Progress reset.' }) }}>Yes, reset everything</button>
                <button className="btn" onClick={() => setConfirmReset(false)}>Cancel</button>
              </div>
            ) : (
              <button className="btn danger" onClick={() => setConfirmReset(true)}>Reset progress</button>
            )}
          </div>
          <p className="fine">
            Reevz Chess is free software under the GPL-3.0 licence. It includes Stockfish (GPL-3.0) and chessground from Lichess (GPL-3.0).
          </p>
        </div>
      </div>
    </>
  )
}
