import { test, expect } from '@playwright/test';
 
test('Smoke Test Suite @smoke', async ({ page }) => {
  await page.goto('https://www.google.com/');
  
});
 
test('charu pappu User Test @regression', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.waitForTimeout(3000);
});
 
test('Delete User Test @smoke @regression', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.waitForTimeout(5000);
});
 