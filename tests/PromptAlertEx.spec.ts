import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/automation-practice');    
page.once('dialog', async dialog => {
let promptalert = dialog.message();
console.log("I Prompt You,Change me",promptalert);
await page.waitForTimeout(2000);
await dialog.accept();
});
await page.locator("//button[contains(text(),'Show Prompt ')]").click();
});
