import { expect, test } from '@playwright/test';
import path from 'path';
test('Download file to Local folder', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/');
await page.locator("//button[@class='nav-link flex items-center gap-1']").click();
await page.locator("//span[contains(text(),'Automation Practice')]").click();

const [download] = await Promise.all([
page.waitForEvent('download'),
page.click("//a[contains(text(),' Download Sample File ')]"),
]);

const downloadpath = path.join('./Screenshots','sample.txt');
await download.saveAs(downloadpath);
console.log("File saved to:",downloadpath);




























































});