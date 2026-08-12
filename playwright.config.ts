import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // 1. Explicitly limit the folder path
  testDir: './tests', 

  // 2. ONLY match files that have .spec.ts in the name
  testMatch: '**/*.spec.ts',

  // 3. Forcibly prevent Playwright from looking at your unit tests
  testIgnore: '**/__tests__/**',

  /* The rest of your configurations (use, webServer, projects) remain exactly the same */
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

