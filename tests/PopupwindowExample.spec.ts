import { expect, test } from '@playwright/test';
test('popup Handling', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const [popup] = await Promise.all([
page.waitForEvent('popup'),
page.click("//button[contains(text(),'Popup Windows')]"),

console.log("Clicked to open new window")
])
await popup.waitForLoadState();
await expect(popup).toHaveTitle("Selenium");
await page.waitForTimeout(3000);
console.log('Opened a new Window ');
});