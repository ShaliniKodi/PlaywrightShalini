import { expect, test } from '@playwright/test';
test('Screenshot', async ({ page }) => {
await page.goto('https://automationexercise.com/');
// await page.screenshot({path: './Screenshots/AutoExcer.png'});
// const logo = await page.locator("//div[@class='logo pull-left']");
// await logo.screenshot({path: './Screenshots/AutoExcer.png'});
// await page.screenshot({path:'./Screenshots/images4.png'});
// const amazonpay = await page.locator("//div[@class='navFooterVerticalColumn navAccessibility']/div");
// await amazonpay.screenshot({path:'./Screenshots/images4.png'});
await page.screenshot({path:'./Screenshots/images5.jpeg'});
const logo = page.getByAltText('Website for automation practice');
await logo.screenshot({path:'/Screenshots/images5.jpeg'});
await expect(logo).toBeVisible();
});