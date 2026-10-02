import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
const firstrow = page.locator("//table[@id='taskTable']/tbody/tr[1]/td[1]");
console.log(firstrow.innerText());
});
  
