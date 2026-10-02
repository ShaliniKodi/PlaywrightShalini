import { expect, test } from '@playwright/test';
test('Handling Slider', async ({ page }) => {

await page.goto("https://jqueryui.com/themeroller/");
const slider = page.locator('#slider');
const handle = slider.locator("ui-slider-handle ui-corner-all ui-state-default");
const box = await slider.boundingBox();

  if (!box) {
    throw new Error('Slider not found');
  }
//   await handle.dragTo(slider, {
//     targetPosition: {
//       x: box.width * 0.8,
//       y: box.height / 2
//     }    
// });
// await expect(page.locator('#value')).toHaveText('80');
});