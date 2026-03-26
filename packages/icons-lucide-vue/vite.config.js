import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsLucideVue',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-icons-lucide-vue.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['vue', 'lucide-vue-next'],
      output: {
        globals: {
          vue: 'Vue',
          'lucide-vue-next': 'LucideVueNext',
        },
      },
    },
  },
})
