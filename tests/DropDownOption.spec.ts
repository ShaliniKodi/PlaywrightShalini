import { expect, test } from '@playwright/test';
test('Practise of page Locators', async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/");

const uploadfilepath = "./UploadFile/AccelQKeyPointstoremember.txt";
await page.locator("#multipleFilesInput").setInputFiles(uploadfilepath);
await page.locator("//button[text()='Upload Multiple Files']").click();
});