import { expect, test } from '@playwright/test';
test('Window Handling', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/automation-practice');
await page.waitForTimeout(5000);
const [newpage] = await Promise.all([
page.waitForEvent('popup'),
page.click("//a[contains(text(),'Open New Window')]"),  
])
newpage.click("//a[contains(text(),'Open New Window')]");
await newpage.waitForTimeout(5000)
console.log("Opened a new Window");
});