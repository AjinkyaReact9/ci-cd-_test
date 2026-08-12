import { defineConfig, devices } from '@playwright/test';
import path from 'path'; // 1. Import path utility

export default defineConfig({
  // 2. Force an absolute path structure that works on Windows and Linux
  testDir: path.join(__dirname, 'tests'), 
  
  // 3. Strictly lock down file targeting match rules
  testMatch: 'counter.spec.ts',
  testIgnore: ['**/__tests__/**', '**/node_modules/**'],

  fullyParallel: false,
  workers: 1,

  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
