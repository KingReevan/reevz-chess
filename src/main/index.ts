import { app, BrowserWindow, ipcMain, nativeTheme, net, protocol, shell } from 'electron'
import { join, normalize } from 'node:path'
import { pathToFileURL } from 'node:url'
import { autoUpdater } from 'electron-updater'

/**
 * The renderer is served from app://reevz/ instead of file://. A real origin lets the
 * Stockfish worker fetch its .wasm file and keeps saved progress in one stable place.
 */
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
])

// Automated tests run against a throwaway profile so they never touch real progress.
if (process.env.REEVZ_USER_DATA) app.setPath('userData', process.env.REEVZ_USER_DATA)

const RENDERER_DIR = join(__dirname, '../renderer')
const TITLEBAR_HEIGHT = 44
const OVERLAY = {
  light: { color: '#EEF2F0', symbolColor: '#384941', height: TITLEBAR_HEIGHT },
  dark: { color: '#171717', symbolColor: '#ECECEC', height: TITLEBAR_HEIGHT }
}

let win: BrowserWindow | null = null

function createWindow(): void {
  const dark = nativeTheme.shouldUseDarkColors
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 960,
    minHeight: 620,
    show: false,
    title: 'Reevz Chess',
    backgroundColor: dark ? '#212121' : '#F7F9F8',
    titleBarStyle: 'hidden',
    titleBarOverlay: dark ? OVERLAY.dark : OVERLAY.light,
    icon: join(__dirname, '../../build/icon.png'),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: true,
      contextIsolation: true,
      spellcheck: false
    }
  })
  win.once('ready-to-show', () => win?.show())
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https:\/\//.test(url)) shell.openExternal(url)
    return { action: 'deny' }
  })
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('app://') && !url.startsWith(process.env.ELECTRON_RENDERER_URL ?? '\0')) e.preventDefault()
  })
  if (!app.isPackaged && process.env.ELECTRON_RENDERER_URL) win.loadURL(process.env.ELECTRON_RENDERER_URL)
  else win.loadURL('app://reevz/index.html')
  win.on('closed', () => (win = null))
}

function setupUpdates(): void {
  if (!app.isPackaged) return
  autoUpdater.autoDownload = true
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.on('update-downloaded', (info) => win?.webContents.send('update:ready', info.version))
  autoUpdater.on('error', () => { /* offline or no release yet: stay quiet */ })
  autoUpdater.checkForUpdates().catch(() => {})
}

if (!app.requestSingleInstanceLock()) app.quit()
else {
  app.on('second-instance', () => {
    if (!win) return
    if (win.isMinimized()) win.restore()
    win.focus()
  })

  app.whenReady().then(() => {
    app.setAppUserModelId('com.kingreevan.reevzchess')
    protocol.handle('app', (req) => {
      const { pathname } = new URL(req.url)
      const file = normalize(join(RENDERER_DIR, decodeURIComponent(pathname)))
      if (!file.startsWith(RENDERER_DIR)) return new Response('Not found', { status: 404 })
      return net.fetch(pathToFileURL(file).toString())
    })

    ipcMain.handle('titlebar:theme', (e, theme: 'light' | 'dark') => {
      BrowserWindow.fromWebContents(e.sender)?.setTitleBarOverlay(OVERLAY[theme === 'dark' ? 'dark' : 'light'])
    })
    ipcMain.handle('app:version', () => app.getVersion())
    ipcMain.handle('update:check', async () => {
      if (!app.isPackaged) return { status: 'dev' }
      try {
        const r = await autoUpdater.checkForUpdates()
        const latest = r?.updateInfo.version
        return { status: latest && latest !== app.getVersion() ? 'downloading' : 'latest', version: latest }
      } catch {
        return { status: 'error' }
      }
    })
    ipcMain.handle('update:install', () => autoUpdater.quitAndInstall())

    createWindow()
    setupUpdates()
    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow() })
  })

  app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
}
