import { expect, test } from '@playwright/test';
test('Screenshot', async ({ page }) => {
await page.goto('https://automationexercise.com/');
await page.screenshot({path: './Screenshots/AutoExcer.png'});
const logo = await page.locator("//div[@class='logo pull-left']");
await logo.screenshot({path: './Screenshots/AutoExcer.png'});
});