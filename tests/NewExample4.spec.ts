import { expect, test } from '@playwright/test';
test('Handling new windows and Popups', async ({ page }) => {

await page.goto("https://playwrightlab.github.io/login.html");
// const parentPage = page;
// const newPagePromise = page.waitForEvent('popup');
//await page.getByRole('button',{name:'Open New Tab'}).click();
// const childpage = await newPagePromise;
// await childpage.waitForLoadState();
//console.log('Parent URL:', parentPage.url());
//console.log('Child URL:', childpage.url());
await page.locator('#loginEmail').fill('test@playlab.com');
await page.locator('#loginPassword').fill('Password123');
await page.getByTestId('login-submit').click();
});