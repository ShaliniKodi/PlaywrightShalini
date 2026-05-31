import { expect, test } from '@playwright/test';
test('Screenshot', async ({ page }) => {

  // Swag Labs Login page

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');

  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  // Products page

  await expect(page.locator('.title')).toHaveText('Products');

  await page.selectOption('//select[@class="product_sort_container"]', { value: 'lohi' });

  await page.waitForTimeout(5000);

  await page.click("//div[@class='inventory_list']/div[2]//button");

  await page.waitForTimeout(10000);

  await page.click("//div[@id='shopping_cart_container']");
 
  //Checkout: Your Information page

  expect(page.locator('.title')).toHaveText('Your Cart');

  await page.click("//button[@id='checkout']");

  expect(page.locator('.title')).toHaveText('Checkout: Your Information');

  await page.fill('#first-name', 'Sandesh');

  await page.fill('#last-name', 'G');

  await page.fill('#postal-code', '07304');

  await page.click("//input[@id='continue']");
 
  //Overview  page

  await expect(page.locator('.title')).toHaveText('Checkout: Overview');

  await page.click("//button[@id='finish']");

  await expect(page.locator('.title')).toHaveText('Checkout: Complete!');

  await page.click("//button[@id='back-to-products']");

});
 