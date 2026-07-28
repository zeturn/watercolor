import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
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
  plugins: [solid(), dts({
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
