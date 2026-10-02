import {expect,test} from '@playwright/test';
test('Successful login',async ({ page }) =>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.locator("//button[text()=' Login ']") .click();
await expect(page).toHaveTitle("OrangeHRM"); 
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});