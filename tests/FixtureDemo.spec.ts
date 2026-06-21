import { test } from '@playwright/test';
test('Test1', async ({ page }) => {
    await page.goto("https://playwright.dev/");
    //await page.waitForTimeout(3000);
    console.log("I am in Test1..");
});
test('Test2', async ({ page }) => {
    await page.goto("https://www.google.com/");
    console.log("I am in Test2..");
});