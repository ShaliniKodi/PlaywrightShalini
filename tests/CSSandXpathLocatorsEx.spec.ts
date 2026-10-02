import { expect, test } from '@playwright/test';
test('Handling css and Xpath locators', async ({ page }) => {
await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
const productitems = page.locator('.inventory_item');
const productlist = await productitems.count();
for(let i=0;i<productlist;i++){
    console.log(await productitems.nth(i).allInnerTexts());
}
await expect(productitems).toHaveCount(6);
//await page.getByAltText('Playwright logo').click();
//await page.getByTitle('ParaBank').click();
// await page.getByRole('textbox',{name: 'username'}).fill('RCV');
// await page.locator('#password').fill('VCR');
// await page.getByLabel('Remember me').check();
//await page.getByRole('link',{name: 'Forgot Your Password?'}).click();
// const linktext = await page.getByRole('link',{name: 'Forgot Your Password?'}).innerText();
// console.log(linktext);
//await page.getByText('Use Custom Domain').click();
//await page.getByText('Log In with Email',{exact:true}).click();
// const gettextelem = page.getByText('Log In with Email').innerText();
// console.log(await gettextelem);
// await page.locator("//input[@name='username']").fill('Shalini Kodi');
// await page.locator("//input[@name='password']").fill('Shalu@2329');
// const latestnewselem = await page.getByRole('heading',{name: 'Latest News'}).innerText();
// console.log(latestnewselem);

// await page.getByRole('link',{name: 'ParaBank Is Now Re-Opened'}).click();
//await page.locator("//ul[@class='leftmenu']/li[3]").click();
//await page.locator("//input[@value='Log In']").click();
});