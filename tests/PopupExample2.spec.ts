import { expect, test } from '@playwright/test';
test('popup Handling', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const [popup] = await Promise.all([
page.waitForEvent('popup'),
page.click("//button[contains(text(),'New Tab')]"),
console.log("Clicked to open new window")    
]);
await popup.waitForLoadState();
await expect(popup.locator("//a[contains(text(),'Playwright with TypeScript Tutorials')]"));
await page.waitForTimeout(5000);
console.log('Moved to new Window ');
});