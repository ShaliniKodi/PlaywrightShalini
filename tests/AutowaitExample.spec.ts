import { expect, test } from '@playwright/test';
test('Auto wait', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.locator("//button[text()=' Login ']").click();
const textelem = await expect(page.getByText("OrangeHRM OS 5.8")).toBeVisible();
console.log("Text Element is visible on login page" + textelem);    
});