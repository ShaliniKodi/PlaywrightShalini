import { test, expect } from '@playwright/test';

test('Search for mobile on Amazon and find all available links', async ({ page }) => {
  // Launch Amazon
  await page.goto('https://www.amazon.com');
  const searchBox = page.locator('input[id="twotabsearchtextbox"]');
  await searchBox.fill('mobile');
  
});