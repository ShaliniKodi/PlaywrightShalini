import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');  
  await expect(page).toHaveTitle("Swag Labs");
  await page.fill("//input[@id='user-name']","standard_user");
  await page.fill("//input[@id='password']","secret_sauce");
  await page.locator("//input[@id='login-button']").click();
  await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
  await page.locator("//a[@class='shopping_cart_link']").click();
  await page.waitForTimeout(3000);
  await page.locator("//button[@name='checkout']").click();  
});
