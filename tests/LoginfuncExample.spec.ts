import { test, expect } from '@playwright/test';

test('Login to Sauce Demo using getByRole', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator("//tbody").last(); 
  
});