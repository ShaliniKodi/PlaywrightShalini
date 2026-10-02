import { expect, test } from '@playwright/test';
test('Practise of page Locators', async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button',{name:'Login'}).click();
});