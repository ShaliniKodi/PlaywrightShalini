import { test, expect } from '@playwright/test';
test.beforeEach("launch Application",async({page})=>{
    console.log("I am in before each")
   await page.goto("https://the-internet.herokuapp.com/"); 
})
test('validate checkboxes link', async ({ page }) => {

  const checkboxlink = page.getByText('Checkboxes');
  await expect(checkboxlink).toBeVisible();
})
test('Unchecking the second checkbox', async ({ page }) => {

  const checkboxlink1 = page.getByText('Checkboxes');
  await checkboxlink1.click();
  const scondcheckbox = page.locator("//input[@type='checkbox']").nth(1);
  await scondcheckbox.uncheck();
  const firstcheckbox = page.locator("//input[@type='checkbox']").nth(0);
  await firstcheckbox.check();
})
test('I am in after each', async ({ page }) => {
console.log("I am in after each");
})
