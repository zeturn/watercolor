import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/components/**/*.test.js'],
    exclude: [],
  },
}); 