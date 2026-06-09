import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  reporter: [['html', { outputFolder: 'reports/html-report' }],['github']],
});
