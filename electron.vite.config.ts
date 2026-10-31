import { resolve } from 'node:path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import type { Plugin } from 'vite'

// Strict Content Security Policy for the packaged app. Dev mode skips it so hot reload works.
const csp: Plugin = {
  name: 'reevz-csp',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(
      '<head>',
      `<head>\n    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'">`
    )
}

export default defineConfig({
  main: { build: { externalizeDeps: true } },
  preload: { build: { externalizeDeps: true } },
  renderer: {
    resolve: { alias: { '@content': resolve('content'), '@renderer': resolve('src/renderer/src') } },
    plugins: [react(), csp]
  }
})
