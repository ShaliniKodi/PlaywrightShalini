import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
await page.once('dialog', async dialog => {
const confiralert = dialog.message();
console.log("Print the confirmation alert:",confiralert);
await dialog.dismiss();
console.log("i donot want confirmation alert:");
});    
await page.locator("//button[@id='confirmBtn']").click();


// await page.screenshot({path:'./Screenshots/checkbox.png'});
// const checkelem = page.getByRole("checkbox",{name:'tuesday'});
// await checkelem.screenshot({path:'./Screenshots/checkbox.png'}); 
   
});
