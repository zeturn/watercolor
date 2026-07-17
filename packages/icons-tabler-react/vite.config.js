import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsTablerReact',
      formats: ['es'],
      fileName: (format) => `watercolor-icons-tabler-react.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['react', '@tabler/icons-react'],
      output: {
        globals: {
          react: 'React',
          '@tabler/icons-react': 'TablerIconsReact',
        },
      },
    },
  },
})
