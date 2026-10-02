import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://wishinfinite.com/');
  await expect(page).toHaveURL('https://wishinfinite.com/');
  await expect(page).toHaveTitle('WishInfinite - Learn Playwright, Selenium, Java, JavaScript & More');
  
  
  
});