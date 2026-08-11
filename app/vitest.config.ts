// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    // Add this line to block Vitest from reading Playwright tests:
    exclude: ['**/node_modules/**', '**/tests/**', '**/dist/**'], 
  },
});
