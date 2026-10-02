import { expect, test } from '@playwright/test';
//import path from 'path';//java sript feature to handle file path
 
test('Assertions Example', async ({ page }) => {
await page.goto("https://www.saucedemo.com");
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.click('#login-button');
// await page.getByPlaceholder('Password').fill('admin123');
// await page.click("//button[text()=' Login ']");
await expect(page.locator('#login-button')).toBeDisabled();
// await page.click("//a[text()='Gift Cards']");
// await expect(page.locator('.dcl-product-image-container')).toHaveCount(31);
// console.log("Total number of gift cards are 31");
// await page.getByPlaceholder('Username').fill('Admin');
// await page.getByPlaceholder('Password').fill('admin123');
// await page.click("//button[text()=' Login ']");
// await page.locator('#login-button').click();
// await expect(page.locator('.inventory_item')).toHaveCount(6);    
});