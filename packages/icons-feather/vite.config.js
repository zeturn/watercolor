import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsFeather',
      formats: ['es'],
      fileName: (format) => `watercolor-icons-feather.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['feather-icons'],
      output: {
        globals: {
          'feather-icons': 'feather',
        },
      },
    },
  },
})
