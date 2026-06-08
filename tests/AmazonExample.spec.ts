import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByLabel('Select the department you').selectOption('search-alias=stripbooks-intl-ship');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('soaps');
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).press('Enter');
  await page.getByRole('link', { name: 'Scents of the Earth: A World' }).click();
});