import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/upload');
const fileupload = './UploadFile/sample.pdf';
await page.locator('#file-upload').setInputFiles(fileupload);
//await page.waitForTimeout(5000);
await page.locator('#file-submit').click();
console.log("Uploaded file Successfully");
//await page.waitForTimeout(5000);
//await expect(page.locator('#uploaded-files')).toHaveText('images.jpeg');
});