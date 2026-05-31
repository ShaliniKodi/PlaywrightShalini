import { expect, test } from '@playwright/test';
import path from 'path';//java sript feature to handle file path
 
test('Download file to Local folder', async ({ page }) => {
  
  await page.goto('https://demo.automationtesting.in/FileDownload.html');
  
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click("//a[@class='btn btn-primary']"), // trigger download
  ]);
  
  const downloadPath = path.join('./Screenshots', 'chintakayapachadi.pdf');
  
  await download.saveAs(downloadPath);// Save file to that folder
  console.log('File saved to:', downloadPath);
});
 