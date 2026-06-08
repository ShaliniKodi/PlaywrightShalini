import { test } from '@playwright/test';
 
test('Print dropdown values - Method 3', async ({ page }) => {
 
await page.goto('https://demoqa.com/select-menu?utm_source=chatgpt.com');
await page.waitForTimeout(3000);
//select by visible text
//await page.locator("//select[@id='oldSelectMenu']").selectOption({ label: 'Green' });
//select by value
//await page.locator("//select[@id='oldSelectMenu']").selectOption('3');
//select by index
const seleccolr = await page.locator("//select[@id='oldSelectMenu']").selectOption({index:8});

});