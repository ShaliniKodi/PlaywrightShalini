import { test, expect } from '@playwright/test';
test.only('Multi locators', async ({ page }) => {
await page.goto("https://automationexercise.com/#google_vignette");
//await page.getByRole("button",{name:'Test Cases'}).click();
//await page.locator("//button[text()='Test Cases']").click(); 
//await page.getByText('Full-Fledged practice website for Automation Engineers',{exact:true});
await page.getByAltText('Website for automation practice');   
});