import { expect, test } from '@playwright/test';
import path from 'path';
test('Handling FileUpload and Download', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/');

const [download] = await Promise.all([
page.waitForEvent('download'),
await page.click("//a[text()='File Download']"),
await page.click("//a[text()='random_data_18.txt']"),
])
const [downloadPath] = path.join('./Screenshots','random_data_18.txt');
await download.saveAs(downloadPath);
console.log("File saved to:", + downloadPath);
});