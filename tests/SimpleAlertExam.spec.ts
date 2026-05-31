import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/automation-practice');    
page.once('dialog', async dialog => {
let alerttext = dialog.message();
console.log("Simple message text is displayed As: " + alerttext);
await page.waitForTimeout(2000)
await dialog.accept();
});
await page.locator("//button[contains(text(),' Show Alert ')]").click();
});