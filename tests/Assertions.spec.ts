import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");

await expect(page.locator('#login-button')).toHaveCount(1);
await expect(page.locator('#login-button')).toBeEnabled();
await expect(page.locator('#login-button')).toBeVisible();
//await expect(page.locator('#login-button')).toBeHidden();
await expect(page.locator('#login-button')).toHaveText('Login');
await expect(page.locator('#login-button')).toHaveAttribute('name','login-button');
await expect(page.locator('#login-button')).toHaveId('login-button');
await expect(page).toHaveURL("https://www.saucedemo.com/");
// await expect(page.locator('#login-button')).toBeDisabled();  
});