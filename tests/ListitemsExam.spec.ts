import { expect, test } from '@playwright/test';
test('Counting the list of items', async ({ page }) => {
await page.goto("https://www.amazon.in/");
await page.getByLabel('Expand Account and Lists').click();
await page.locator('#nav-al-title').hover();
});