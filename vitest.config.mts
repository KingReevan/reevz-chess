import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: { alias: { '@content': resolve('content') } },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
    // The course index globs module files at transform time, so a cached transform would
    // hide newly added modules. Always transform fresh.
    fsModuleCache: false
  }
})
