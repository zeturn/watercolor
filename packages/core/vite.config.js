import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true })
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorCore',
      formats: ['es', 'umd'],
      fileName: (format) => `core.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
    },
  }
}) 
