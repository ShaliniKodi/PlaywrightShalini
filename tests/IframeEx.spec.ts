import { test, expect } from '@playwright/test';

test('frames', async ({ page }) => {
await page.goto("https://docs.oracle.com/javase/8/docs/api/");
const frame1 = await page.frameLocator("//frame[@name='packageListFrame']");
await frame1?.locator("//a[text()='java.applet']").click();

}); 