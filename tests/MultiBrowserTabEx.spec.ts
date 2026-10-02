import { expect, test } from '@playwright/test';
const {chromium} = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
test('Multitab Handling', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
const [newpage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=JAVASCRIPT')
    
]);
await newpage.waitForLoadstate;
}
)}
)

