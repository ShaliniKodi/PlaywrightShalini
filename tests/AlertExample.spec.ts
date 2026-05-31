import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');
  // Listen for dialog
//   page.once('dialog', async (dialog) => {
//     console.log('Alert message:', dialog.message());
//     await dialog.accept();
//     //await page.waitForTimeout(5000);
//   });
    page.once('dialog', async dialog => {
    let confirmalert = dialog.message();
    console.log('Confirm Text Captured',confirmalert);
    // expect(confirmalert).toBe('I am displaying Confirmation Alert')
    // await console.log('Type:', dialog.type);
    await page.waitForTimeout(2000)
    });
  //await page.waitForTimeout(5000);
  await page.locator("//button[contains(text(),'Show confirm box')]").click();
});