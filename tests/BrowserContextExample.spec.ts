import { chromium, expect, test } from '@playwright/test';
test('Handling Browser Context', async ({ browser }) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://jqueryui.com/");
// await page.getByRole('link',{name:'Images'}).click();
// await page.locator('#ti6dpd').fill('books');
// await page.keyboard.press("Enter");
// await page.waitForTimeout(3000);
await page.locator("//nav[@id='main']/div/ul/li[4]").click();
await page.locator("//input[@id='autocomplete']").fill('School Uniform');
await page.getByRole('link',{name:'Second'}).click();
page.on('dialog',async dialog=>{
const simdialog = await dialog.message();
console.log("Simple Dialog box is displayed"+ simdialog);
await dialog.accept();
})
await page.locator("//button[@id='dialog-link']").click();


//await page.locator("//li/a[text()='Second']").click();
});
