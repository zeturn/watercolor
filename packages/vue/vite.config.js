import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorVue',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-vue.${format}.js`,
      cssFileName: 'watercolor-vue',
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: [
        'vue',
        '@zeturn/watercolor-core',
        '@zeturn/watercolor-icons-feather',
        '@zeturn/watercolor-icons-heroicons-vue',
        '@zeturn/watercolor-icons-lucide-vue',
        '@zeturn/watercolor-icons-phosphor-vue',
        '@zeturn/watercolor-icons-tabler-vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@zeturn/watercolor-core': 'WatercolorCore',
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
