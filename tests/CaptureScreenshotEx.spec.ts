 import { test, expect } from '@playwright/test';

test('capture screenshots in playwright', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');
     await page.locator("//table[@name='BookTable']/tbody/tr[2]/td[1]").screenshot({path:'./Screenshots/element.png'});
     await page.screenshot({path:'./Screenshots/pageelement.png'});
     await page.screenshot({path:'./Screenshots/Fullpage.png',fullPage:true});
});

// //element screenshot
// //await page.locator("#page-header-container").screenshot({path:'./Screenshots/elementscreenshot.png'});
// //await page.locator("#page-header-banner").screenshot({path:'./Screenshots/elementscreen.png'});

// //page screenshot
// //await page.screenshot({path:'./Screenshots/ElementscreenshotEx.png'});
// //full page screenshot
// await page.screenshot({path:'./Screenshots/ElementscreenshotEx.png',fullPage:true});
// });