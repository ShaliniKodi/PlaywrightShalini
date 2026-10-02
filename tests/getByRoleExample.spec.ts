import { test, expect } from '@playwright/test';
import path from 'path';
test.only('Handling Dynamic Elements', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.locator('#login-button').click();
await page.getByRole('button',{name:'Add to cart'}).nth(5).click();
//await page.locator('#shopping_cart_container').click();
//console.log(await page.getByText('Your Cart').innerText());
await page.locator('.product_sort_container').selectOption('Price (low to high)');
//await page.getByRole('button',{name:'Continue Shopping'}).click();
//await page.getByRole('button',{name:'Checkout'}).click();


//await page.locator('#react-burger-menu-btn').click();
//await page.locator('#about_sidebar_link').click();
// const swablabtext = await page.locator("//div[text()='Swag Labs']");
// await expect(swablabtext).toBeVisible();
// await page.getByText('All Items').click();
// const productnames = await page.locator('.inventory_item').allInnerTexts();
// const productname = await productnames
// console.log("Displayed all the product names successfully" + productnames);
//await page.getByText('Sauce Labs Fleece Jacket').nth(3).innerText();

//await page.locator('#add-to-cart-sauce-labs-backpack').click();
//await page.getByRole('link',{name:'All Items'}).click();

});