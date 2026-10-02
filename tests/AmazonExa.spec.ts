import { test, expect } from '@playwright/test';
test('Amazon XPath Axes Examples', async ({page}) =>{
await page.goto('https://the-internet.herokuapp.com/');
//await page.getByText('A/B Testing').click();
//await page.getByRole('link',{name:'A/B Testing'}).click();
await page.getByRole('link',{name:'Form Authentication'}).click();
await page.getByLabel('Username').fill('Shalini Kodi');
await page.getByLabel('Password').fill('Password@2329');
await page.getByRole('button',{name:'Login'}).click();
await page.getByAltText('Fork me on GitHub');

// await page.locator('.input_error.form_input').nth(0).fill('standard_user');
// await page.locator('#password').fill('secret_sauce');
// await page.locator("//input[@type='submit']").click();
//div[@class='tp-header-right']/a[@class='tp-login-btn']

});