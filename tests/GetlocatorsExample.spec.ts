import { expect, test } from '@playwright/test';
test('getlocators example', async ({ page }) => {

await page.goto('https://www.amazon.com');
await page.getByRole
await page.getByRole('textbox',{name:'Computers'}).click();
await page.waitForTimeout(3000);
await page.locator('#searchDropdownBox').selectOption('Arts & Crafts');
});