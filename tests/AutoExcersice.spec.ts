import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.waitForTimeout(5000);
await page.fill("//input[@id='user-name']","performance_glitch_user");
await page.fill("//input[@id='password']","secret_sauce");
await page.click("//input[@id='login-button']");
await page.waitForTimeout(5000);
await page.click("//button[@id='add-to-cart-sauce-labs-bike-light']");
await page.waitForTimeout(5000);
await page.dblclick("//a[@class='shopping_cart_link']");
await page.waitForTimeout(5000);
await page.click("//button[@id='checkout']");
await page.close();
});    