import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
 await page.goto('https://www.amazon.in/');
 await page.waitForTimeout(3000);
 await page.locator('#nav-hamburger-menu').click();
 const contentdevice = page.locator("//section[@aria-labelledby='Digital Content and Devices']/ul/li").allInnerTexts();
 console.log(await contentdevice);
 
});