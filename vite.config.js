import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  optimizeDeps: {
    exclude: [
      '@heroicons/react',
      '@heroicons/vue',
      '@phosphor-icons/react',
      '@phosphor-icons/vue',
      '@tabler/icons-react',
      '@tabler/icons-vue',
      'lucide-react',
      'lucide-vue-next',
    ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WatercolorUI',
      formats: ['es', 'umd'],
      fileName: (format) => `watercolor-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue', 'react', 'react-dom',
        '@heroicons/react',
        '@heroicons/vue',
        '@phosphor-icons/react',
        '@phosphor-icons/vue',
        '@tabler/icons-react',
        '@tabler/icons-vue',
        'feather-icons',
        'lucide',
        'lucide-react',
        'lucide-vue-next',
      ],
      output: {
        globals: {
          vue: 'Vue',
          react: 'React',
          'react-dom': 'ReactDOM',
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