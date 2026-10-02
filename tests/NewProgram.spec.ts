import { test, expect } from '@playwright/test';

test('Printing the innertext', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const seleniumtext = await page.locator("//p//span[text()='For Selenium, Cypress & Playwright']").innerText();
console.log(seleniumtext);

const seleniumtext1 = await page.locator("//p//span[text()='For Selenium, Cypress & Playwright']").textContent();
console.log(seleniumtext1);
//console.log(seleniumtext);
// const secondRow = await page.locator("//tbody/tr[2]/td[6]").first().innerText();
// console.log(secondRow);
// const fifthcolmn = await page.locator("//tbody/tr/td[5]").allInnerTexts();
// console.log(fifthcolmn);
//await page.fill('#user-name', 'standard_user');
//await page.fill('#password', 'secret_sauce');
//await page.click('#login-button');
//const usercredentialstext = await page.locator("#login_credentials").innerText();
//console.log(usercredentialstext);
//const usertext1 = await page.locator("#login_credentials").textContent();
//console.log(usertext1);
//await expect(thirdprod).toBeVisible();   
//await expect(thirdprod).toContainText('Sauce');

// await page.locator("input[type='checkbox']").nth(0).check();
// await page.locator("input[type='checkbox']").nth(1).uncheck();
});