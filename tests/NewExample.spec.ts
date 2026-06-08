import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rightandbright.vercel.app/automation-practice');
  await page.getByRole('textbox', { name: 'Enter your text here' }).click();
  await page.getByRole('textbox', { name: 'Enter your text here' }).fill('test');
  await page.getByRole('button', { name: 'Success' }).click();
  await page.getByRole('combobox').selectOption('option1');
  await page.locator('input[type="date"]').fill('1983-01-23');
  await page.locator('input[type="date"]').press('Enter');
  await page.getByRole('radio', { name: 'Option A' }).check();
  await page.getByRole('checkbox', { name: 'Checkbox 1' }).check();
  await page.getByRole('textbox', { name: 'Type something and see key' }).click();
});