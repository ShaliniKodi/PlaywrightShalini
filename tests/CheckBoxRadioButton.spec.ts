import { test, expect } from '@playwright/test';
test.only('Handling Alerts', async ({ page }) => {
await page.goto("https://jqueryui.com/checkboxradio/");
const frame = await page.frameLocator('[class="demo-frame"]');
// await expect(frame.locator('[for="radio-1"]')).not.toBeChecked();
// await frame.locator('[for="radio-1"]').check();
// await expect(frame.locator('[for="radio-1"]')).toBeChecked();
//await expect(frame.locator('[for="checkbox-nested-4"]')).not.toBeChecked();
await frame.locator('[for="checkbox-nested-2"]').check();
await expect(frame.locator('[for="checkbox-nested-2"]')).toBeChecked();
});