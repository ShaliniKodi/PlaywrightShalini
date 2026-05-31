import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');

page.once('dialog',async dialog => {
let promptalert = dialog.message();
console.log("I Prompt You,Change me",promptalert)
await page.waitForTimeout(3000);
await dialog.dismiss();
console.log("Clicked on dismiss button",promptalert);
});
await page.locator("//button[contains(text(),'Show prompt box')]").click();
});