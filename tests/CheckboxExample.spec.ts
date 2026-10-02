import { test, expect } from '@playwright/test';
test.only('verify Days Checkbox', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("#sunday").check();
await page.locator('#male').click();
await page.locator('#animals').selectOption('Rabbit')
await expect(page.locator('#animals')).toHaveValue('rabbit');
const [newPage] = await Promise.all([
page.waitForEvent('popup'),
await page.locator("//button[text()='New Tab']").click(),  
])
const titleelem = page.getByText('SDET-QA Blog');
console.log(await titleelem);

// page.on('dialog',async dialog=>{
// // let confirmalert = dialog.message();
// // console.log("Confirm alert is successfully clicked: " + confirmalert);
// let cancelmessage = dialog.message();
// console.log("Confirm alert is successfully canceled: " + cancelmessage);
// await dialog.dismiss();
// })
// await page.locator("//button[text()='Confirmation Alert']").click();
// await page.locator("//p[text()='You pressed Cancel!']").innerText()
// page.on('dialog',async dialog=>{
// let simpalert = dialog.message();
// console.log("Simple alert text is entered: " + simpalert);
// await dialog.accept();
// })
// await page.locator("//button[text()='Simple Alert']").click();
// await page.waitForTimeout(2000);
// await page.locator("//table[@id='productTable']/tbody/tr[1]/td[4]").click();

});