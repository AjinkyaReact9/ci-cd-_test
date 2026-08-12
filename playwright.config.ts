import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Enforce rigid string target to avoid file collection loops
  testDir: './tests',
  testMatch: 'counter.spec.ts',
  testIgnore: ['**/__tests__/**', '**/node_modules/**'],
  
  fullyParallel: false, // Prevents runner threads from stepping on each other
  workers: 1,           // Forces a single clean execution thread in CI
  
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
