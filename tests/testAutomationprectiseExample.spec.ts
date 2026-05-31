 import { test, expect } from '@playwright/test';
 test.only('has title', async ({ page }) => {
 await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");   
 await page.goto("https://testautomationpractice.blogspot.com/");
 await page.hover("//a[contains(text(),'PlaywrightPractice')]");
 await page.click("//button[@class='dropbtn']");
 await page.dblclick("//button[contains(text(),'Copy Text')]");
 await page.locator("//div[@id='draggable']").dragTo(page.locator("//div[@id='droppable']"));
 await page.waitForTimeout(5000);
 await page.locator("//input[@value='standard'").click();
});