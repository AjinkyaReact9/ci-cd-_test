// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    // Change this from 'http://127.0.0.1:3000' to localhost
    baseURL: 'http://localhost:3000', 
  },
  webServer: {
    command: 'npm run build && npm run start',
    // Change this from 'http://127.0.0.1:3000' to localhost
    url: 'http://localhost:3000',     
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
