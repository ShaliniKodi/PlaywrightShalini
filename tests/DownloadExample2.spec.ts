import { expect, test } from '@playwright/test';
import path from 'path';//java sript feature to handle file path
 
test('Download file to Local folder', async ({ page }) => {
  
  await page.goto('https://demoqa.com/upload-download');
  
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click("//a[@id='downloadButton']"), // trigger download
  ]);
  
  const downloadPath = path.join('./Screenshots', 'sampleFile.jpeg');
  
  await download.saveAs(downloadPath);// Save file to that folder
  console.log('File saved to:', downloadPath);
});
 