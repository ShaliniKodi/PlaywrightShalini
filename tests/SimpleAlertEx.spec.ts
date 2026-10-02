import { expect, test } from '@playwright/test';
test('Simple Alert', async ({ page }) => {
    await page.goto('https://dotesthere.com/?utm_source=chatgpt.com');
    page.on('dialog',async dialog =>{
    const simplealert = dialog.message();
    console.log("You successfully clicked an alert:" + simplealert);
    await dialog.accept();
    });
    await page.locator("//button[contains(text(),'Click for JS Alert')]").click();
});