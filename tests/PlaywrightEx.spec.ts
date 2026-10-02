import { expect, test } from '@playwright/test';
//import path from 'path';
test('Handling FileUpload and Download', async ({ page }) => {

await page.goto('https://the-internet.herokuapp.com/');
//await page.locator("//a[text()='Dropdown']").click();
await page.locator("//a[text()='Checkboxes']").click();
await page.locator("//form[@id='checkboxes']/input[2]").uncheck();
await page.locator("//form[@id='checkboxes']/input[1]").check();
// await page.locator('#dropdown').click();
// await page.locator('#dropdown').selectOption('Option 2');
});