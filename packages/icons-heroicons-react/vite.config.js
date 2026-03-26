import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorIconsHeroiconsReact',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-icons-heroicons-react.${format}.js`,
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: ['react', '@heroicons/react'],
      output: {
        globals: {
          react: 'React',
          '@heroicons/react': 'HeroiconsReact',
        },
      },
    },
  },
})
