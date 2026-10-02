import { expect, test } from '@playwright/test';
test('Verify Hard and Soft Assertions', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await expect(page).toHaveTitle("Automation Testing Practice");
});
