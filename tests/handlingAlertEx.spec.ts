import { test, expect } from '@playwright/test';
test.only('Handling Alerts', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
//const simplealert = await page.getByText('Simple Alert',{exact:true}).click();
//console.log("Simple Alert is called:" + simplealert);
page.once('dialog',dialog=>{
dialog.accept();
console.log(dialog.message());
})
await page.getByPlaceholder('Please enter your name:').fill('Harry Potter');
await page.getByText('Prompt Alert',{exact:true}).click();
});