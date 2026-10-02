import { test, expect } from '@playwright/test';
test('Amazon XPath Axes Examples', async ({page}) =>{
await page.goto('https://www.facebook.com/');
//Want exact text and avoid partial matches
//await page.getByText('Login', { exact: true }).click();
const facetext = page.getByText('Log in to Facebook',{exact:true});
console.log(await facetext.innerText());
await page.getByRole('textbox',{name:'Email address or mobile number'}).fill('shalini.kodi23@gmail.com');
await page.getByLabel('Password').fill('Shalini@2329');
await page.locator('button:has-text("Log in")').click();

});