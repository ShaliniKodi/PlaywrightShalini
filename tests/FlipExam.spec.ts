import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/automation-practice');
await page.getByRole('textbox',{name:'Enter your text here'}).fill('test');
await page.getByRole('button',{name:'Success'}).click();
console.log("Entered text successfully");
await page.getByRole('combobox').selectOption('Option 3');
await page.waitForTimeout(3000);
console.log("Option 3 has been selected successfully");
await page.waitForTimeout(3000);
await page.locator('input[@type="date"]').fill('23-01-1983');
});