import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://www.amazon.in/");
await page.locator("#twotabsearchtextbox").fill("soaps");
await page.keyboard.press("Enter");
await page.locator("//div[@id='sac-suggestion-row-3']");
await page.waitForTimeout(3000);
await page.locator("#sac-suggestion-row-3").click();
});