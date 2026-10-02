import { test, expect } from '@playwright/test';

test.describe('inputs — login validation', () => {
test('invalid email surfaces the inline error', async ({ page }) => {
await page.goto('https://lab.hakdogan.com/practice/multi-select/');
await page.getByText('Skills');
await page.getByRole('button', { name: 'Playwright' }).click();
await page.getByRole('button', { name: 'k6' }).click();
await page.getByRole('button', { name: 'Selenium' }).click();

// await page.getByRole('button',{name: 'Playwright' }).click();
// await page.getByRole('button',{name: 'k6' }).click();
// await page.getByRole('button',{name: 'Selenium' }).click();
// await page.getByTestId('work-email').fill('abc@def.com');
// await page.getByTestId('login-password').fill('Password@2329');
// await page.getByTestId('sign-in-button').click();
//buttons Example
// await page.getByTestId('select-tool').selectOption('webdriver');
// await page.waitForTimeout(2000);
// console.log("Selected webdriver Successfully");




    // 

    
    
  });


});