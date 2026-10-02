import { test, expect } from '@playwright/test';
import path from 'path';
test.only('Handling Stable Locators', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/");
//await page.getByRole('link',{name:'File Upload'}).click();
// const fileuploadpath = './Screenshots/example1.png';
// await page.locator('#file-upload').setInputFiles(fileuploadpath);
// await page.click('#file-submit');
// const [download] = await Promise.all([
// page.waitForEvent('download'),
//  await page.click("//a[text()='File Download']"),
//  await page.click("//a[text()='Images.txt']")  
// ])
// const [downloadPath] = path.join('./Screenshots','Images.txt');
// await download.saveAs(downloadPath);
// console.log("File Saved to :" , downloadPath);
//frames Example
// await page.locator("//a[text()='Frames']").click();
// await page.locator("//a[text()='iFrame']").click();
// const iframetext = page.getByRole('heading',{name:'An iFrame containing the TinyMCE WYSIWYG Editor'}).innerText();
// //await expect(iframetext).toHaveText('An iFrame containing the TinyMCE WYSIWYG Editor');
// console.log(await iframetext);
// const iframe3 = page.frameLocator('#mce_0_ifr')
// const innetxt = page.locator("//body/p[text()='Your content goes here.']").innerText();
// console.log(await innetxt);
page.on('dialog',async dialog=>{
const simplealert =  dialog.message();
console.log("Simple alert message is displayed:" + simplealert); 
await dialog.dismiss();   
});
await page.locator("//a[text()='JavaScript Alerts']").click();
await page.getByRole('button',{name:'Click for JS Prompt'}).click();

});
