import { test, expect } from '@playwright/test';
test('Handle multiple windows', async ({ page, context }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const popupPromise = page.waitForEvent('popup');
    await page.click("//button[text()='Popup Windows']");
    const popup = await popupPromise;
    await popup.waitForLoadState();
    console.log(await popup.title());
    await popup.close();
    await page.bringToFront();
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");
    console.log("Returned to prevoius page");
    await expect(page).toHaveTitle("Automation Testing Practice");

});