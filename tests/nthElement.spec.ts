import { expect, test } from '@playwright/test';
 
test('Handle Element Index', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//div//input[@id='comboBox']").click();
const selectcomboelem = page.locator("//div[@id='dropdown']").click();
});