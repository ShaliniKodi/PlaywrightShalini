import { test, expect } from '@playwright/test';
test('Handle Asserions', async ({ page, context }) => {
await page.goto("https://the-internet.herokuapp.com/upload");
const fileupload = "./UploadFile/PlaywrightExample.txt";
await page.locator('#file-upload').setInputFiles(fileupload);
await page.waitForTimeout(3000);
await page.locator('#file-submit').click();

// await expect(page).toHaveURL('https://automationexercise.com/');
// console.log("Url is checked");
// await expect(page).toHaveTitle('Automation Exercise');
// console.log("Expected title is achieved");
// await page.getByRole("link",{name:'Products'}).click();
// await page.getByText("All Products",{exact:true});
// console.log("All products text exists");
// await page.locator('a:has-text("View Product")').nth(0).click();


});