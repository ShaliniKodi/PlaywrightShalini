import { expect, test } from '@playwright/test';
import path from 'path';//java sript feature to handle file path
 
test('Download file to Local folder', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/download");
const [download] = await Promise.all([
page.waitForEvent('download'),
await page.click("//a[text()='image.jpg']"),
])  
const downloadpath = path.join('./Screenshots','image.jpeg'); 
await download.saveAs(downloadpath);
console.log('File saved to:', downloadpath); 
});