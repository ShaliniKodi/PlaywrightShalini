import { test, expect } from '@playwright/test';
 test.only('has title', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const femaleradiobtn = page.locator("//input[@id='female']");
    await femaleradiobtn.check();
    await expect(femaleradiobtn).toBeChecked
    //await page.waitForTimeout(3000);
    console.log("female Radio Button is selected");
 });