import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
await page.goto("https://letcode.in/frame#google_vignette");
const firstframe = page.frameLocator('#firstFr')
await page.waitForTimeout(5000);
await firstframe.locator("//input[@name='fname']").fill('Shalini');
await firstframe.locator("//input[@name='lname']").fill('Kodi');
await page.waitForTimeout(5000);
}); 