import { expect, test } from '@playwright/test';
test('Handling fileupload', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button').click();
//await page.locator("//div[@class='inventory_item']").filter({hasText:'Sauce Labs Bike Light'}).getByRole('button').click();
const productitem = page.locator("//div[@class='inventory_item']");
await expect(productitem).toHaveCount(6);


});
