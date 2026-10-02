import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.locator('#login-button').click();
// Playwright automatically waits for the button to be:
  // - attached to DOM
  // - visible
  // - stable
  // - enabled
  // - able to receive the click
await page.getByRole('button',{name:'Add to cart'}).nth(2).click();
const swagtext = await page.getByText('Swag Labs');
await expect(swagtext).toHaveText('Swag Labs');
await page.locator('.shopping_cart_link').click();
await expect(page.getByRole('button',{name:'Checkout'})).toBeVisible();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');


//await page.getByText('Sauce Labs Bike Light').click();


});