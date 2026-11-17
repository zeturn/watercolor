import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { componentEntries } from '../../scripts/component-entries.mjs'

const { entry, declarations } = componentEntries('react')

export default defineConfig({
  plugins: [react(), declarations],
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry,
      formats: ['es'],
      fileName: (_format, name) => name === 'index' ? 'watercolor-react.es.js' : `entries/${name}.js`,
      cssFileName: 'watercolor-react',
    },
    rollupOptions: {
      external: (id) => /^(react|react-dom)(\/|$)/.test(id) || id === '@zeturn/watercolor-core',
      output: { chunkFileNames: 'chunks/[name]-[hash].js' },
    },
  },
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
})
