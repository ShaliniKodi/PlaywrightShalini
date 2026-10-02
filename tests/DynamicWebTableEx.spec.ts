import { expect, test } from '@playwright/test';
test.only('Drag and Drop', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForTimeout(3000);
const firstrow =  page.locator("//table[@id='taskTable']/tbody/tr[1]").filter({
    hasText:"Chrome"    
    });
const names = await page.locator("td").nth(2).textContent();
console.log("Text Content of first row is:" + names);
console.log(firstrow);   
});