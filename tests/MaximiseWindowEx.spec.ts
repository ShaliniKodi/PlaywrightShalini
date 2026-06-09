import { test } from '@playwright/test';
 
test('Launch Amazon in maximized window', async ({ browser }) => {
//await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");    
const context = await browser.newContext({
viewport: null  
});
const page = await context.newPage();
await page.goto('https://www.amazon.in');
  await page.waitForTimeout(5000);
// launchOptions: {
//       args: ['--start-maximized']
//     }
});
