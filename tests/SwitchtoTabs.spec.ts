import {test } from '@playwright/test';
test('Switch to new window', async ({ page }) => {
//page:Original Tab
//NewPage:Newly Opened Tab    
await page.goto("https://testautomationpractice.blogspot.com/"); 
const [newpage] = await Promise.all([
page.context().waitForEvent('page'),
page.locator("//button[text()='New Tab']").click(),
await page.waitForTimeout(5000),
]);
await newpage.waitForLoadState();
console.log(await newpage.title());  
});
