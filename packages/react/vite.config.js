import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorReact',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@watercolor/core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'watercolor-react.css'
          }
          return assetInfo.name
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}) 
