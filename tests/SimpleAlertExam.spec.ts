import { expect, test } from '@playwright/test';
test('Simple Alert', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.on('dialog',dialog=>{
let simalert = dialog.message();
console.log("You Successfully enetered alert",+simalert);
dialog.accept();
});
await page.locator("//button[text()='Click for JS Alert']").click();
});