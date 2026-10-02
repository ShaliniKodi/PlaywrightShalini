import { expect,test } from '@playwright/test';

test('Display Amazon products', async ({ page }) => {
  await page.goto('https://www.amazon.com/s?k=headphones');

  const alltextelements = page.locator(
    "//div[@id='navFooter']//div[3]//ul"
  );

  const count = await alltextelements.count();

  console.log(`Found ${count} products`);

  for (let i = 0; i < count; i++) {
    console.log(await alltextelements.nth(i).textContent());
  }
});