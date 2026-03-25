import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorVue',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-vue.${format}.js`,
      cssFileName: 'watercolor-vue',
    },
    rollupOptions: {
      external: [
        'vue',
        '@zeturn/watercolor-core',
        '@zeturn/watercolor-icons-feather',
        '@zeturn/watercolor-icons-lucide-vue',
        '@zeturn/watercolor-icons-tabler-vue',
        '@zeturn/watercolor-icons-phosphor-vue',
        '@zeturn/watercolor-icons-heroicons-vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
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
}) 
