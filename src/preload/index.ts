import { contextBridge, ipcRenderer } from 'electron'

const api = {
  setTitleBarTheme: (theme: 'light' | 'dark') => ipcRenderer.invoke('titlebar:theme', theme),
  version: (): Promise<string> => ipcRenderer.invoke('app:version'),
  checkForUpdates: (): Promise<{ status: 'dev' | 'latest' | 'downloading' | 'error'; version?: string }> => ipcRenderer.invoke('update:check'),
  installUpdate: () => ipcRenderer.invoke('update:install'),
  onUpdateReady: (cb: (version: string) => void) => {
    const fn = (_: unknown, v: string) => cb(v)
    ipcRenderer.on('update:ready', fn)
    return () => ipcRenderer.removeListener('update:ready', fn)
  }
}

contextBridge.exposeInMainWorld('reevz', api)
export type ReevzApi = typeof api
