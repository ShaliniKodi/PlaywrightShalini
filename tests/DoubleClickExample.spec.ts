import { expect, test } from '@playwright/test';
test('Hover', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.fill('#name','sumanth sharma');
await page.fill('#email','sumanth.sharma1999@gmail.com');
await page.fill('#phone','7032832939');
await page.fill('#textarea','6-104/9');
await page.click('#male');
await page.check('#sunday');
await page.selectOption('#country','india');
await page.selectOption('#colors','red');
await page.selectOption('#animals','cat');
await page.locator("//button[contains(text(),'Copy Text')]").dblclick();
await page.waitForTimeout(3000);

});
