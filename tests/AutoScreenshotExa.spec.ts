import { expect, test } from '@playwright/test';
test('Screenshot', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.screenshot({path:'./Screenshots/copytext.png'});
const shadoelem = page.getByRole('button',{name:'Copy Text'});
await shadoelem.screenshot({path:'./Screenshots/shadowtext.png'});
});    