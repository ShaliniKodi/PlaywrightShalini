import { expect, test } from '@playwright/test';
test('Practise of page Locators', async ({ page }) => {

await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");
await page.locator('#user-name').fill('standard_user');
await page.locator("#password").fill('secret_sauce');
await page.locator("#login-button").click();
//Add to cart Page
await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
await page.waitForTimeout(3000);
await page.locator("//a[@class='shopping_cart_link']").click();
await page.locator("//button[text()='Checkout']").click();
await page.locator("//input[@id='continue']").click();
await page.getByRole('textbox',{name:'firstName'}).fill('shalini kodi');


});