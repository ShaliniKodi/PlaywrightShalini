import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
await page.goto('https://practice.expandtesting.com/upload?utm_source=chatgpt.com#google_vignette');
const fileupload = './Screenshots/images.jpeg';
await page.locator('#fileInput').setInputFiles(fileupload);
await page.locator('#fileSubmit').click();
//await page.waitForTimeout(5000);
//await expect(page.locator('#uploaded-files')).toHaveText('images.jpeg');
});