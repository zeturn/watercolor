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
      name: 'WatercolorReact',
      formats: ['es'],
      fileName: (format) => `watercolor-react.${format}.js`,
      cssFileName: 'watercolor-react',
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
        '@zeturn/watercolor-core',
        '@zeturn/watercolor-icons-feather',
        '@zeturn/watercolor-icons-heroicons-react',
        '@zeturn/watercolor-icons-lucide-react',
        '@zeturn/watercolor-icons-phosphor-react',
        '@zeturn/watercolor-icons-tabler-react',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
          'react/jsx-dev-runtime': 'ReactJSXDevRuntime',
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
