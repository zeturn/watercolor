import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsTablerVue',
      formats: ['es'],
      fileName: (format) => `watercolor-icons-tabler-vue.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['vue', '@tabler/icons-vue'],
      output: {
        globals: {
          vue: 'Vue',
          '@tabler/icons-vue': 'TablerIconsVue',
        },
      },
    },
  },
})
