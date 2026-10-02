import { expect, test } from '@playwright/test';
test('Select Dropdown', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
const contrnames = await page.locator("//select[@id='country']").selectOption({index:4});
console.log(await contrnames);


});