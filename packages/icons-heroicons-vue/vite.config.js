import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsHeroiconsVue',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-icons-heroicons-vue.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', '@heroicons/vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
