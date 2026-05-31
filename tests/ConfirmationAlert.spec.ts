import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');
page.once('dialog', async dialog => {
//Alert Text    
let confirmalert = dialog.message();
console.log('I am a confirm alert',confirmalert);
await page.waitForTimeout(3000);
await dialog.dismiss();
console.log("I have clicked on cancel button",confirmalert);
});
//await dialog.accept();//click on ok
//await dialog.dismiss();//click on cancel
//Trigger Confirmation Alert
await page.locator("//button[contains(text(),'Show confirm box')]").click();
//await page.waitForTimeout(3000);
//Verify result text
//await expect(confirmtext).toBe('I am a confirm alert');
});