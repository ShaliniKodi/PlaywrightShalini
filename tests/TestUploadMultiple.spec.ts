import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
const filePath = './playwright.config.ts';
await page.waitForTimeout(5000);
await page.locator("//input[@id='multipleFilesInput']").setInputFiles(filePath);
await page.locator("//button[contains(text(),'Upload Multiple Files')]").click();
await page.waitForTimeout(3000);
//await expect(page.locator("span[class='mb-1.5']")).toBeVisible({ timeout: 30000 });
});