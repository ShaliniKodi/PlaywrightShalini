import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('#name').fill('Shalini');
await page.locator('#email').fill('shalini.kodi23@gmail.com');
await page.locator('#phone').fill('9700848694');
await page.locator('#textarea').fill('Addagutta,Western Hills');
await page.locator('#female').click();
await page.waitForTimeout(3000);
console.log("Female radio button is clicked");
await page.check("#wednesday");
await page.selectOption('#country','Canada');
await page.selectOption('#colors','Green');
await page.selectOption('#animals','Fox');


});