import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsLucideReact',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-icons-lucide-react.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'lucide-react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
