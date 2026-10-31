// Copies the single-threaded "lite" Stockfish build into the renderer's public folder,
// so it ships inside the app and runs offline in a Web Worker.
import { existsSync, mkdirSync, readdirSync, copyFileSync, writeFileSync, statSync } from 'node:fs'
import { join, basename } from 'node:path'

const pkg = join('node_modules', 'stockfish')
const out = join('src', 'renderer', 'public', 'stockfish')
if (!existsSync(pkg)) { console.log('[stockfish] package not installed yet, skipping'); process.exit(0) }

const walk = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? walk(p) : [p] })
const files = walk(pkg)
const js = files.find((f) => /stockfish-[\d.]+-lite-single\.js$/.test(f))
if (!js) { console.error('[stockfish] could not find a lite single-threaded build in', pkg); process.exit(1) }
const wasm = js.replace(/\.js$/, '.wasm')
if (!existsSync(wasm)) { console.error('[stockfish] missing wasm next to', js); process.exit(1) }

mkdirSync(out, { recursive: true })
const base = basename(js)
copyFileSync(js, join(out, base))
copyFileSync(wasm, join(out, base.replace(/\.js$/, '.wasm')))
writeFileSync(join(out, 'manifest.json'), JSON.stringify({ script: base }, null, 2))
console.log('[stockfish] copied', base)
