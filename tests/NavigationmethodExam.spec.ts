import { test, expect } from '@playwright/test';
test.only('Navigation Methods', async ({ page }) => {
await page.goto("https://automationexercise.com/#google_vignette");
await page.goto("https://www.google.com/");
await page.goBack();
await page.goForward()
await page.locator("//textarea[@name='q']").fill('Books');
await page.keyboard.press("Enter");
await page.getByRole('button',{name:'btnK'}).click();
});