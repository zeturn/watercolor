import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      { find: /^@zeturn\/watercolor-core$/, replacement: resolve(__dirname, '../core/src/index.ts') },
      { find: '@zeturn/watercolor-core/src', replacement: resolve(__dirname, '../core/src') },
    ],
  },
  test: {
    include: ['src/**/*.test.ts'],
  },
})
