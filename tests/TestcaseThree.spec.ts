  import { test, expect } from '@playwright/test';
  test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.fill('[data-test="username"]','standard_user');
  await page.locator('[data-test="password"]').click();
  await page.fill('[data-test="username"]','secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});