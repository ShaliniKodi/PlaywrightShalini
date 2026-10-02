import { test, expect } from '@playwright/test';
test.only('Handling Textbox Elements', async ({ browser }) => {
// await page.getByLabel('Username').pressSequentially('practice');
// await page.getByLabel('Password').pressSequentially('SuperSecretPassword!');
// await page.getByRole('button',{name:'Login'}).click();
const context = await browser.newContext()
const page = await context.newPage();
 


// const heading = page.getByRole('heading',{name:'Secure Area page for Automation Testing Practice'});
// await expect(heading).toBeVisible();
//console.log(await heading.innerText());
// const welcomesetext = page.getByRole('heading',{name:'Welcome to the Secure Area. When you are done click logout below.'});
// console.log(await welcomesetext.innerText())
// const demoexam = await page.locator('.dropdown-item').nth(4).innerText();
// console.log(demoexam)
// const dropdownitems = page.locator('.dropdown-item');
// const dropdwnlist = await dropdownitems.count();
// for(let i=0;i<dropdwnlist;i++){
//     console.log(await dropdownitems.allTextContents());
// }
// await expect(page.locator('.dropdown-item')).toHaveCount(5);
// console.log("Total drop down items in the list are 5 :");
//await page.getByLabel('Input: Number').pressSequentially('1235');
// const textbox = page.getByRole('textbox').first();
// await textbox.pressSequentially('Hello');
// await textbox.pressSequentially('World');
// await page.getByLabel('Input: Password').pressSequentially('3456');
await page.goto("https://practice.expandtesting.com/windows");
await page.getByRole('link',{name:'Home'}).click();
});