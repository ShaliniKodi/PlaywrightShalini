import { test, expect } from '@playwright/test';
test.only('verify Playwright title', async ({ page }) => {
await page.goto("https://playwright.dev/");
await page.getByTitle('Fast and reliable end-to-end testing for modern web apps | Playwright').innerText();
await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});