import { expect, test } from '@playwright/test';
test('Upload File', async ({ page }) => {
await page.goto('https://www.file.io/');
const filePath = './UploadFile/Importantlinks.txt';
await page.waitForTimeout(5000);
await page.locator("//input[@id='select-files-input']").setInputFiles(filePath);
await page.waitForTimeout(3000);
await expect(page.locator("span[class='mb-1.5']")).toBeVisible({ timeout: 30000 });
});