import { test, expect } from '@playwright/test';
test('Switch to New Tab', async ({ page }) => {
page.goto('https://the-internet.herokuapp.com/windows');
const [newPage] = await Promise.all([
page.context().waitForEvent('page'),
await page.click("//a[text()='Click Here']"),
])
await newPage.waitForLoadState(),
await expect(newPage.locator('h3')).toHaveText('New Window');
});