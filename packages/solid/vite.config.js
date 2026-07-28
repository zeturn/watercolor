import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path'

export default defineConfig({
  plugins: [solid()],
  build: {
    emptyOutDir: true,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorSolid',
      formats: ['es'],
      fileName: (format) => `watercolor-solid.${format}.js`,
      cssFileName: 'watercolor-solid',
    },
    rollupOptions: {
      external: [
        'solid-js',
        'solid-js/web',
        'solid-js/store',
        '@zeturn/watercolor-core',
        // Feather icons are bundled (framework-agnostic SVG strings, tiny).
        // lucide/heroicons/tabler/phosphor are intentionally NOT supported in Solid
        // (no framework-agnostic/Solid package exists), so they are never imported.
      ],
      output: {
        globals: {
          'solid-js': 'Solid',
          'solid-js/web': 'SolidWeb',
          'solid-js/store': 'SolidStore',
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
    },
  },
})
