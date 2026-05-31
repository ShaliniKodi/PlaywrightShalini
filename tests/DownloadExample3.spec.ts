import { expect, test } from '@playwright/test';
import path from 'path';//java sript feature to handle file path
 
test('Download file to Local folder', async ({ page }) => {
  
  await page.goto('https://the-internet.herokuapp.com/download');

  const [download] = await Promise.all([
   page.waitForEvent('download'),
   page.click("//a[contains(text(),'images.jpeg')]"),
]);
const downloadPath = path.join('./Screenshots', 'sampleFile1.jpeg');
await download.saveAs(downloadPath);// Save file to that folder
console.log('File saved to:', downloadPath);
});