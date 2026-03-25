import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorReact',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-react.${format}.js`,
      cssFileName: 'watercolor-react',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@zeturn/watercolor-core',
        '@zeturn/watercolor-icons-feather',
        '@zeturn/watercolor-icons-lucide-react',
        '@zeturn/watercolor-icons-tabler-react',
        '@zeturn/watercolor-icons-phosphor-react',
        '@zeturn/watercolor-icons-heroicons-react',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          return '[name][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@zeturn/watercolor-core/src': resolve(__dirname, '../core/src'),
    },
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
}) 
