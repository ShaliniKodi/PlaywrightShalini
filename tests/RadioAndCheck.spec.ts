import {expect, test } from '@playwright/test';
test('Radio Buttons and Checkboxes', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
page.locator('#male').check();

 
});