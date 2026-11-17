import { defineConfig } from 'vite'
import { componentEntries } from '../../scripts/component-entries.mjs'

const { entry, declarations } = componentEntries('next')

export default defineConfig({
  plugins: [declarations],
  build: {
    emptyOutDir: true,
    lib: {
      entry,
      formats: ['es'],
      fileName: (_format, name) => name === 'index' ? 'watercolor-next.es.js' : `entries/${name}.js`,
    },
    rollupOptions: {
      external: (id) => /^(react|react-dom)(\/|$)/.test(id) || id.startsWith('@zeturn/watercolor-'),
      // Every subpath is an independent RSC client boundary.
      output: { banner: "'use client';", chunkFileNames: 'chunks/[name]-[hash].js' },
    },
  },
})
