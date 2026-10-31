import { useCallback, useEffect, useRef, useState } from 'react'
import { Chess } from 'chess.js'
import type { Key } from 'chessground/types'
import type { Opening } from '@content'
import { Board, BoardTools } from '../components/Board'
import { Glyph, Icon } from '../components/Icon'
import { StageBar } from '../components/bits'
import { botById, candidates, openingInfo, pickWeighted } from '../lib/book'
import { colorOf, dests, tokens, type Color } from '../lib/chess'
import { engine } from '../lib/engine'
import { playMoveSound, sound } from '../lib/sound'
import { useLive, useStore } from '../lib/store'

type Status = { kind: '' | 'win' | 'bad'; msg: string }
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export function PlayView({ op }: { op: Opening }) {
  const botId = useStore((s) => s.bot)
  const playAs = useStore((s) => s.playAs)
  const startFrom = useStore((s) => s.startFrom)
  const go = useStore((s) => s.go)
  const setCoach = useLive((s) => s.setCoach)
  const bot = botById(botId)

  const g = useRef(new Chess())
  const token = useRef(0)
  const inBook = useRef(true)
  const [color, setColor] = useState<Color>('white')
  const [flipped, setFlipped] = useState(false)
  const [last, setLast] = useState<[Key, Key] | undefined>()
  const [status, setStatus] = useState<Status>({ kind: '', msg: '' })
  const [say, setSay] = useState(bot.hi)
  const [over, setOver] = useState(false)
  const [game, setGame] = useState(0)
  const [engineOk, setEngineOk] = useState<boolean | null>(null)
  const [, force] = useState(0)
  const rerender = () => force((n) => n + 1)

  const checkOver = useCallback(
    (me: Color): boolean => {
      const c = g.current
      if (!c.isGameOver()) return false
      setOver(true)
      if (c.isCheckmate()) {
        if (colorOf(c.turn()) === me) {
          setStatus({ kind: 'bad', msg: `Checkmate. ${bot.name} wins this one.` })
          setSay('¡Gracias! Want a rematch?')
        } else {
          sound.win()
          setStatus({ kind: 'win', msg: 'Checkmate. You win!' })
          setSay('¡Bien jugado! Well played.')
        }
      } else setStatus({ kind: '', msg: 'Draw.' })
      return true
    },
    [bot.name]
  )

  const botTurn = useCallback(
    async (me: Color) => {
      const my = token.current
      setStatus({ kind: '', msg: `${bot.name} is thinking…` })
      await sleep(380)
      if (my !== token.current) return
      const c = g.current
      const book = candidates(op, c.history(), bot)
      let move: string | { from: string; to: string; promotion?: string } | null = null
      if (book.length) move = pickWeighted(book).san
      else {
        if (inBook.current) {
          inBook.current = false
          setSay("That's the end of my book. Now we're really playing!")
        }
        const legal = c.moves({ verbose: true })
        if (Math.random() < bot.blunder) move = legal[Math.floor(Math.random() * legal.length)]
        else {
          const uci = await engine.bestMove(c.fen(), bot)
          if (my !== token.current) return
          if (uci) move = { from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] }
          else {
            const caps = legal.filter((m) => m.captured)
            move = (caps.length ? caps : legal)[Math.floor(Math.random() * (caps.length ? caps : legal).length)]
          }
        }
      }
      if (!move) return
      const m = c.move(move)
      playMoveSound(m.san)
      setLast([m.from as Key, m.to as Key])
      rerender()
      if (!checkOver(me)) setStatus({ kind: '', msg: 'Your move.' })
    },
    [bot, op, checkOver]
  )

  // Start a new game whenever the bot, side or start position changes, or "New game" is pressed.
  useEffect(() => {
    token.current++
    const c = new Chess()
    if (startFrom === 'spanish') tokens(op.moves).forEach((s) => c.move(s))
    g.current = c
    inBook.current = true
    const me: Color = playAs === 'random' ? (Math.random() < 0.5 ? 'white' : 'black') : playAs
    setColor(me)
    setFlipped(false)
    setOver(false)
    setSay(bot.hi)
    const h = c.history({ verbose: true })
    const l = h[h.length - 1]
    setLast(l ? [l.from as Key, l.to as Key] : undefined)
    if (colorOf(c.turn()) === me) setStatus({ kind: '', msg: 'Your move.' })
    else botTurn(me)
    engine.start().then(setEngineOk)
    rerender()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [botId, playAs, startFrom, game])

  const userMove = (mv: string | { from: string; to: string; promotion: string }) => {
    if (over || colorOf(g.current.turn()) !== color) return
    let m
    try {
      m = g.current.move(mv)
    } catch {
      return rerender()
    }
    playMoveSound(m.san)
    setLast([m.from as Key, m.to as Key])
    rerender()
    if (!checkOver(color)) botTurn(color)
  }

  const takeBack = () => {
    const c = g.current
    if (colorOf(c.turn()) !== color || c.history().length === 0) return
    token.current++
    c.undo()
    if (c.history().length && colorOf(c.turn()) !== color) c.undo()
    setOver(false)
    const h = c.history({ verbose: true })
    const l = h[h.length - 1]
    setLast(l ? [l.from as Key, l.to as Key] : undefined)
    setStatus({ kind: '', msg: 'Took back your last move. Your move.' })
    if (colorOf(c.turn()) !== color) botTurn(color)
    rerender()
  }

  const hist = g.current.history()
  const myTurn = !over && colorOf(g.current.turn()) === color
  useEffect(() => {
    setCoach({ kind: 'play', history: hist, myTurn, play: (san) => userMove(san) })
  })
  useEffect(() => () => { token.current++; setCoach(null) }, [setCoach])

  const info = openingInfo(op, hist)
  const rows: string[][] = []
  for (let i = 0; i < hist.length; i += 2) rows.push([String(i / 2 + 1), hist[i], hist[i + 1] ?? ''])

  return (
    <>
      <StageBar crumbs={['Practice game', `${bot.name} · ${bot.elo}`]} />
      <div className="inner">
        <div className="pl-head">
          <span className="avatar"><Glyph g={bot.glyph} /></span>
          <div className="bubble">{say}</div>
        </div>
        <div className="play">
          <div className="pl-board">
            <Board
              fen={g.current.fen()}
              orientation={flipped ? (color === 'white' ? 'black' : 'white') : color}
              lastMove={last}
              check={g.current.inCheck()}
              movable={{ color, dests: myTurn ? dests(g.current) : new Map(), onMove: (from, to) => userMove({ from, to, promotion: 'q' }) }}
            />
            <BoardTools onFlip={() => setFlipped((f) => !f)} />
          </div>
          <div className="pl-panel card" data-engine={engineOk === null ? 'loading' : engineOk ? 'ready' : 'fallback'}>
            <div className={`opening${info.out ? ' out' : ''}`}>
              <small>{info.out ? 'Out of book' : 'Opening'}</small>
              <b>{info.name}</b>
              <span className="fine">{info.sub}</span>
              {info.moduleId && (
                <div style={{ marginTop: 6 }}>
                  <button className="linkbtn" onClick={() => go({ type: 'module', id: info.moduleId! })}>Study Module {info.moduleId}</button>
                </div>
              )}
            </div>
            <div className={`status${status.kind ? ' ' + status.kind : ''}`} role="status">
              <Icon name={status.kind === 'win' ? 'trophy' : status.kind === 'bad' ? 'x' : 'target'} />
              <span>{status.msg}</span>
            </div>
            <div className="movetable">
              {rows.length ? rows.map((r) => (
                <span key={r[0]} style={{ display: 'contents' }}>
                  <span className="n">{r[0]}.</span><span>{r[1]}</span><span>{r[2]}</span>
                </span>
              )) : <><span className="n">–</span><span>No moves yet</span><span /></>}
            </div>
            <div className="btnrow">
              <button className="btn sm" onClick={() => setGame((n) => n + 1)}><Icon name="restart" /> New game</button>
              <button className="btn sm" onClick={takeBack} disabled={!myTurn || hist.length === 0}><Icon name="undo" /> Take back</button>
            </div>
            <p className="fine">
              You play {color === 'white' ? 'White' : 'Black'}. {bot.name} plays the opening lines from the course, then switches to Stockfish tuned to about {bot.elo} strength.
              {engineOk === false && ' Stockfish could not start on this computer, so the bot is using simple fallback moves.'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
