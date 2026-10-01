import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,   // ✅ makes test/expect available without imports
    setupFiles: './src/setupTests.js',
  },
});
