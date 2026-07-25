import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const emptyIcons = path.resolve(__dirname, 'src/shims/empty-icons.js')

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@zeturn/watercolor-icons-lucide-react': emptyIcons,
      '@zeturn/watercolor-icons-heroicons-react': emptyIcons,
      '@zeturn/watercolor-icons-tabler-react': emptyIcons,
      '@zeturn/watercolor-icons-phosphor-react': emptyIcons,
      '@zeturn/watercolor-icons-feather': emptyIcons,
    },
  },
  server: {
    host: true,
    port: 3000,
    open: true
  }
})
