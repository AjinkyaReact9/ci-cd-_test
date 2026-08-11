// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',         // <-- This simulates the browser 'document'
    setupFiles: ['./vitest.setup.ts'],
  },
});

