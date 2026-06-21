import { test, expect } from '@playwright/test';
test('Enter Text', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
// await page.locator("input[name='username']").fill('Admin');
// await page.locator("input[name='password']").fill('admin123');
// await page.locator("//button[@type='submit']").click();
//await page.locator('#monday').check();
//await page.waitForTimeout(3000);
//await page.locator('#country').selectOption('Japan');
//await page.locator('#country').selectOption('canada');
//await page.locator('#country').selectOption({index:3});
//await page.locator('#colors').selectOption({index:2});
const filepath = './UploadFile/ImportantQuaestionsAnswers.txt';
page.locator("//input[@id='singleFileInput']").setInputFiles(filepath);
await page.locator("//button[text()='Upload Single File']").click();    
});