import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForTimeout(3000);
//await page.click("//input[@id='comboBox']");
//await page.click("//*[@id='dropdown']/div[1]");
//await page.locator("//input[@id='thursday']").click();
//await page.waitForTimeout(3000);
//page.locator("//input[@id='female']").click();
//await page.waitForTimeout(3000);
// await page.locator("//button[contains(text(),'Copy Text')]").click();
// await page.waitForTimeout(3000);
await page.locator("//input[@id='field2']").dblclick(); 
});