import { test, expect } from '@playwright/test';
test('Working on frames', async ({ page }) => {
page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target");
const frame1 = page.frameLocator("//div[@id='container']");
await page.waitForTimeout(5000);
const frame2 = frame1.frameLocator('//div[@id="iframecontainer"]');
await frame2.locator("//a[text()='Visit W3Schools.com!']").click();
});