// Asks Stockfish about a position, for checking tactical claims in course content.
//
//   node scripts/engine.mjs "d4 Nf6 c4 g6 Nc3 Bg7 e4 d6"          position after these SAN moves
//   node scripts/engine.mjs --fen "<FEN>"                          a FEN instead
//   options: --depth 20 (default 18)  --multipv 3 (default 3)
//
// Scores are from White's point of view, in pawns (+1.00 = White is a pawn better) or as mate in N.
// Engine numbers are for checking claims only; course text describes positions in words.
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { Chess } from 'chess.js'

const require = createRequire(import.meta.url)
const args = process.argv.slice(2)
const opt = (name, def) => {
  const i = args.indexOf(`--${name}`)
  if (i < 0) return def
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}
const depth = +opt('depth', 18)
const multipv = +opt('multipv', 3)
const fenArg = opt('fen', null)

const g = new Chess()
if (fenArg) g.load(fenArg)
else for (const san of (args[0] ?? '').trim().split(/\s+/).filter(Boolean)) {
  try { g.move(san) } catch { console.error(`Illegal move "${san}" after: ${g.history().join(' ') || 'start'}`); process.exit(1) }
}
const fen = g.fen()
const whiteToMove = g.turn() === 'w'
console.log(`FEN  ${fen}`)
console.log(`Side to move: ${whiteToMove ? 'White' : 'Black'}${g.isCheckmate() ? ' (checkmated)' : g.isCheck() ? ' (in check)' : ''}`)
if (g.isGameOver()) process.exit(0)

const cli = require.resolve('stockfish/scripts/cli.js')
const sf = spawn(process.execPath, [cli], { stdio: ['pipe', 'pipe', 'inherit'] })
const send = (c) => sf.stdin.write(c + '\n')
const best = new Map()
let buf = ''
sf.stdout.on('data', (d) => {
  buf += d
  let i
  while ((i = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, i).trim()
    buf = buf.slice(i + 1)
    const m = line.match(/^info depth (\d+) .*multipv (\d+) score (cp|mate) (-?\d+).* pv (.+)$/)
    if (m && !line.includes('upperbound') && !line.includes('lowerbound')) best.set(+m[2], { depth: +m[1], kind: m[3], v: +m[4], pv: m[5].split(' ') })
    if (line.startsWith('bestmove')) {
      for (const [k, r] of [...best.entries()].sort((a, b) => a[0] - b[0])) {
        const sign = whiteToMove ? 1 : -1
        const score = r.kind === 'mate' ? `mate in ${Math.abs(r.v)} for ${r.v * sign > 0 ? 'White' : 'Black'}` : `${((r.v * sign) / 100 >= 0 ? '+' : '')}${((r.v * sign) / 100).toFixed(2)}`
        const line = new Chess(fen)
        const sans = []
        for (const u of r.pv.slice(0, 10)) {
          try { sans.push(line.move({ from: u.slice(0, 2), to: u.slice(2, 4), promotion: u[4] }).san) } catch { break }
        }
        console.log(`${k}. ${score.padEnd(18)} ${sans.join(' ')}   (depth ${r.depth})`)
      }
      send('quit')
    }
  }
})
send('uci')
send(`setoption name MultiPV value ${multipv}`)
send(`position fen ${fen}`)
send(`go depth ${depth}`)
