import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsPhosphorReact',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-icons-phosphor-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', '@phosphor-icons/react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
