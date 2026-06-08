import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://www.flipkart.com/');
test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('link', { name: 'Fashion' }).click();
  await page.getByRole('link', { name: 'Watches' }).click();
  await page.getByRole('link').nth(5).click();
  await page.getByText('Fastrack', { exact: true }).click();
  await page.getByText('Baby & Kids').click();
  await page.getByRole('link', { name: 'Action Figures' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'STYLELOOP Cute Sleeping Cat and Mouse riCar Interior Accessory' }).click();
  const page1 = await page1Promise;
  await page1.locator('._1psv1zeb9._1psv1ze0._1psv1zeku > div > div > div:nth-child(2)').first().click();
  await page1.getByRole('link', { name: 'Cart 1 Cart' }).click();
  await page1.getByText('Save for later').click();
  await page1.locator('.jCH_7O').click();
});
});