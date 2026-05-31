import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://www.saucedemo.com/')
await page.fill('#user-name', 'standard_user');
await page.fill('#password', 'secret_sauce');
await page.click('#login-button');
expect(page.locator('.app_logo')) .toHaveText('Swag Labs');
expect(page.locator('.title')) .toHaveText('Products');
await page.waitForTimeout(3000);
await page.selectOption ('.product_sort_container', {value: 'lohi'});
 });