import { expect, test } from '@playwright/test';
//import path from 'path';
test('Handling Frames', async ({ page }) => {

await page.goto('https://jqueryui.com/autocomplete/');
const iframe = page.frameLocator('.demo-frame');
await iframe.locator('#tags').fill('Java');
});