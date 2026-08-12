// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // Add this exact line to protect the tests folder from Vitest:
    exclude: ['**/node_modules/**', '**/tests/**', '**/dist/**'],
  },
});
