import { expect, test } from '@playwright/test';
test('Practise of page Locators', async ({ page }) => {

await page.goto("https://dotesthere.com/?utm_source=chatgpt.com");
const uploadfile = "./UploadFile/Tirupathiprayanam.txt";
await page.locator("//input[@id='file-upload']").setInputFiles(uploadfile);
await page.waitForTimeout(3000);
await page.getByText('Upload', { exact: true }).click();
});