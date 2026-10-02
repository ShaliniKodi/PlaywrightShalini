import { test, expect } from '@playwright/test';
test.only('verify login', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await expect(page.getByRole('button',{name:'Login'})).toBeEnabled();
await page.getByRole('button',{name:'Login'}).click();
await expect(page).toHaveTitle('OrangeHRM')
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
// await page.locator("//span[text()='Leave']").click();
// await page.locator("//span[text()='Reports ']").click();
// const reportelem = await page.locator("//ul[@class='oxd-dropdown-menu']/li").allInnerTexts();
// console.log(await reportelem);
// await expect(page.locator("//ul[@class='oxd-dropdown-menu']/li")).toHaveCount(2);
//await page.locator("//ul[@class='oxd-main-menu']/li[6]").click();
await page.locator("//span[text()='My Info']").click();
await page.waitForTimeout(2000);
await page.locator("//div[text()='demo.jpg']").click();
await page.locator("//button//i[@class='oxd-icon bi-pencil-fill']").click();

//await expect(page.locator("//div[@role='columnheader' and text()='Username']")).toBeEnabled();


// await page.locator("//span[text()='Entitlements ']").click()
// const entitletextelem = page.locator("//ul[@class='oxd-dropdown-menu']/li").allInnerTexts()
// console.log(await entitletextelem)
//await expect(page.getByText('Search')).toBeVisible();
// await page.waitForTimeout(2000);
// await page.getByRole('button',{name:'Search'}).click();

//await page.getByAltText('client brand banner').click();

});