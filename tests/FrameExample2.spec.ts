import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
await page.goto("https://letcode.in/frame#google_vignette");
const frame = page.frameLocator("#firstFr");
const firstname = page.locator("//input[@name='fname']");
firstname.fill("Shalini");
const lname = page.locator("//input[@name='lname']");
lname.fill("kodi");
const frames = await page.frames.length;
console.log("Number of frames in this webpage are: " + frames);

});