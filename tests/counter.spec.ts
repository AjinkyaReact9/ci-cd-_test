// tests/counter.spec.ts
import { test, expect } from '@playwright/test';

// Ensure this block is NOT marked as async. Only the internal functions can be async.
test('should increment the counter when button is clicked', async ({ page }) => {
  await page.goto('/');

  const counterValue = page.getByTestId('counter-value');
  await expect(counterValue).toHaveText('0');

  await page.getByTestId('increment-btn').click();

  await expect(counterValue).toHaveText('1');
});
