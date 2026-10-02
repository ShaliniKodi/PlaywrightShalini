import { expect, test } from '@playwright/test';
test('Handling Slider', async ({ page }) => {

await page.goto("https://testautomationpractice.blogspot.com/");

const parentpage = page;
const newpagePromise = page.waitForEvent('popup');
await page.getByRole('button',{name:'Popup Windows'}).click();
const childpage = await newpagePromise;
await childpage.waitForLoadState();
console.log('Parent URL:', parentpage.url());
console.log('Child URL:', childpage.url());
});
