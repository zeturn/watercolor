import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: /^@zeturn\/watercolor-core$/, replacement: resolve(__dirname, '../core/src/index.ts') },
      { find: '@zeturn/watercolor-core/src', replacement: resolve(__dirname, '../core/src') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/components/**/*React.test.jsx'],    exclude: [],  },
}); 
