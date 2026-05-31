import { test, expect } from '@playwright/test';
test.only('My First Test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.fill("//input[@id='name']", 'Shalini Kodi');
  await page.fill("//input[@id='email']", 'shalini.kodi23@gmail.com');
  await page.fill("//input[@id='phone']", '9700848694');
  await page.fill("//textarea[@id='textarea']", '478/a Vivekananda nagar colony');
  await page.locator("//input[@id='female']").click();
  await page.locator("//input[@id='monday']").click();
  //await expect(page.locator("//*[contains(text(),'Get It by Tomorrow')]")).toBeVisible({ timeout: 45000 });
  await page.waitForTimeout(5000);
  //await page.locator("//*[contains(text(),'Get It by Tomorrow')]").click();
  await page.selectOption("//select[@id='country']", "uk");
  await page.waitForTimeout(5000);
  //await expect(page.locator('')).toBeVisible({ timeout: 45000 });

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

