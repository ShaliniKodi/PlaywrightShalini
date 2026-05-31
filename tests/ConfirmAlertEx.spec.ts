import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/automation-practice');
page.once('dialog', async dialog => {
let confirmtext = dialog.message();
console.log("Simple message text is displayed As: " + confirmtext);
await page.waitForTimeout(2000)
//await dialog.accept();
//console.log("Yes I want to Proceed");
await dialog.dismiss();
console.log("No I don't want to Proceed");  
});
await page.locator("//button[contains(text(),' Show Confirm')]").click();
});