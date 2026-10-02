    import { expect, test } from '@playwright/test';
    test('Handling product Dynamically and add to cart', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
 await page.getByPlaceholder('Username').fill('standard_user');
 await page.getByPlaceholder('Password').fill('secret_sauce');
 await page.getByRole('button', { name: 'Login' }).click();
 //await page.locator('.inventory_item').nth(0).click();
 //await page.getByRole('button',{name:'Add to cart'}).nth(0).click();
//  const firstproduct = page.locator('.inventory_item').nth(1).innerText();
//  console.log(await firstproduct);
//  const productitems = page.locator('.inventory_item').allInnerTexts();
//  console.log(await productitems); 
//  const productlist = page.locator('.inventory_item').count();
//  await expect(page.locator('.inventory_item')).toHaveCount(6);
const productitem = page.getByText('Sauce Labs Backpack').innerText();
console.log(await productitem);
await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

});