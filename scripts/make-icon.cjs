// Renders build/icon.png (512x512): the cburnett white knight on the app's green tile.
// Run with: npx electron scripts/make-icon.cjs
const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const path = require('path')

const css = fs.readFileSync(path.join(__dirname, '../node_modules/chessground/assets/chessground.cburnett.css'), 'utf8')
const knight = css.match(/piece\.knight\.white\s*\{[^}]*url\(['"]?(data:[^'")]+)['"]?\)/)[1]
const html = `<html><body style="margin:0;background:transparent">
<div style="width:512px;height:512px;border-radius:112px;background:linear-gradient(160deg,#1a8a69,#0e5d47);display:grid;place-items:center">
<img src="${knight}" style="width:380px;height:380px;filter:drop-shadow(0 10px 14px rgba(0,0,0,.35))"></div></body></html>`

app.whenReady().then(async () => {
  const win = new BrowserWindow({ width: 512, height: 512, show: false, transparent: true, frame: false, webPreferences: { offscreen: true } })
  await win.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html))
  await new Promise((r) => setTimeout(r, 400))
  const img = await win.webContents.capturePage({ x: 0, y: 0, width: 512, height: 512 })
  fs.mkdirSync(path.join(__dirname, '../build'), { recursive: true })
  fs.writeFileSync(path.join(__dirname, '../build/icon.png'), img.resize({ width: 512, height: 512 }).toPNG())
  console.log('wrote build/icon.png')
  app.quit()
})
