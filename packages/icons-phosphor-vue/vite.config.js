import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsPhosphorVue',
      formats: ['es'],
      fileName: (format) => `watercolor-icons-phosphor-vue.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['vue', '@phosphor-icons/vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@phosphor-icons/vue': 'PhosphorIconsVue',
        },
      },
    },
  },
})
