import { test, expect } from '@playwright/test';

test('Search for mobile on Amazon and find all available links', async ({ page }) => {
await page.goto("https://www.google.com/");
//to verify url exists or not 
await expect(page).toHaveURL("https://www.google.com/");
await expect(page).toHaveTitle("Google");
});