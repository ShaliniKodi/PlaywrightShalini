import { expect, test } from '@playwright/test';
import path from 'path';
test('Handling FileUpload and Download', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/');
// const FileUpload = "UploadFile/sample.pdf";
// await page.locator('#file-upload').setInputFiles(FileUpload);
// await page.locator('#file-submit').click();
const [download] = await Promise.all([
page.waitForEvent('download'),
await page.click("//a[text()='File Download']"),
await page.click("//a[text()='resume.txt']")   
])
const [downloadPath] = path.join('./Screenshots','resume.txt');
await download.saveAs(downloadPath);
console.log("File Saved to:" + downloadPath);













// const [download] = await Promise.all([
// page.waitForEvent('download'),
// await page.click("//a[text()='File Download']"),
// await page.click("//a[text()='TextDoc.txt']")    
// ])
// const downloadPath = path.join('./Screenshots', 'TextDoc.txt');
// await download.saveAs(downloadPath);
// console.log('File saved to:', downloadPath);
});