import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder("Username").fill('Admin');
await page.getByPlaceholder("Password").fill('admin123');
await page.locator("//button[text()=' Login ']").click(); 
//To verify url use Assertion
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
await expect(page).toHaveTitle('OrangeHRM');

});