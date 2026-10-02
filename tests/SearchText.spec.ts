import { expect, test } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto("https://lab.hakdogan.com/practice/searchable-select/");
const searchText = page.getByPlaceholder('Type to search…');
await searchText.click();
await searchText.fill('US United States');
await expect(searchText).toHaveValue('US United States');
});