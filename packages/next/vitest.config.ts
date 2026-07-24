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
      { find: /^@zeturn\/watercolor-react$/, replacement: resolve(__dirname, '../react/src/index.ts') },
      { find: '@zeturn/watercolor-react/src', replacement: resolve(__dirname, '../react/src') },
      { find: /^@zeturn\/watercolor-core$/, replacement: resolve(__dirname, '../core/src/index.ts') },
      { find: '@zeturn/watercolor-core/src', replacement: resolve(__dirname, '../core/src') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: [],
  },
});
