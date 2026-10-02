import { expect, test } from '@playwright/test';
//import path from 'path';
test('Handling Frames', async ({ page }) => {

await page.goto('https://demoqa.com/nestedframes?utm_source=chatgpt.com');
const parentframe = page.frameLocator('#frame1');
await expect(
      parentframe.locator('body')
    ).toContainText('Parent frame');
const childframe = parentframe.frameLocator('iframe');
await expect(
      childframe.locator('body')
    ).toContainText('Child Iframe');
});