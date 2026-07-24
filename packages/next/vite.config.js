import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { existsSync, unlinkSync } from 'fs'
import dts from 'vite-plugin-dts'

const removePrivateUtilityDeclarations = (emittedFiles) => {
  for (const filePath of emittedFiles.keys()) {
    if (/[/\\]components[/\\][^/\\]+[/\\]utils\.(?:d\.ts|d\.ts\.map)$/.test(filePath) && existsSync(filePath)) {
      unlinkSync(filePath)
    }
  }
}

// Next.js App Router compiles with the React Server Components transform, which
// only treats a module as a client reference when the literal first line of the
// file is the `"use client"` directive. Because this package re-exports the React
// components, we inject the directive through a Rollup banner so the published
// bundle is a valid client boundary without duplicating any component code.
const rscBanner = `'use client';`

export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
    entryRoot: 'src',
    include: ['src'],
    afterBuild: removePrivateUtilityDeclarations,
  })],
  build: {
    emptyOutDir: true,
    assetsDir: '',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorNext',
      formats: ['es'],
      fileName: (format) => `watercolor-next.${format}.js`,
      cssFileName: 'watercolor-next',
    },
    rollupOptions: {
      checks: {
        pluginTimings: false,
      },
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'next',
        '@zeturn/watercolor-core',
        '@zeturn/watercolor-react',
        '@zeturn/watercolor-icons-feather',
        '@zeturn/watercolor-icons-heroicons-react',
        '@zeturn/watercolor-icons-lucide-react',
        '@zeturn/watercolor-icons-phosphor-react',
        '@zeturn/watercolor-icons-tabler-react',
      ],
      output: {
        // Keep the directive as the very first line of the emitted module.
        banner: rscBanner,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
          'react/jsx-dev-runtime': 'ReactJSXDevRuntime',
          '@zeturn/watercolor-core': 'WatercolorCore',
          '@zeturn/watercolor-react': 'WatercolorReact',
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
