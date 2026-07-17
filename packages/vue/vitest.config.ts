import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
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
    include: ['tests/components/**/*.test.js'],
    exclude: [],
  },
});
