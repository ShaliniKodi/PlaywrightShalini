import { expect, test } from '@playwright/test';
import path from 'path';//java sript feature to handle file path
 
test('Download file to Local folder', async ({ page }) => {
  
  await page.goto('https://dotesthere.com/?utm_source=chatgpt.com');
  
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click("//a[text()='Download sample.pdf']"), // trigger download
   
  ]);
  
  const downloadPath = path.join('./Screenshots', 'sample.pdf');
  
  await download.saveAs(downloadPath);// Save file to that folder
  console.log('File saved to:', downloadPath);
});
 