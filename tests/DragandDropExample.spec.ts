import { expect, test } from '@playwright/test';
test.only('Drag and Drop', async ({ page }) => {
await page.goto("https://jqueryui.com/droppable/");
const source = page.locator("//div[@id='draggable']");
const destin = page.locator("//div[@id='droppable']");
source.dragTo(destin);
});