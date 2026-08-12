import { test, expect } from '@playwright/test';

// The callback function is no longer marked as async
test('Alternative promise chain execution', ({ page }) => {
  return page.goto('/')
    .then(() => {
      return expect(page.getByTestId('counter-value')).toHaveText('0');
    })
    .then(() => {
      return page.getByTestId('increment-btn').click();
    })
    .then(() => {
      return expect(page.getByTestId('counter-value')).toHaveText('1');
    });
});
