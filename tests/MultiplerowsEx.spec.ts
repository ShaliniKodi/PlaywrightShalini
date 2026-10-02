import { expect, test } from '@playwright/test';

test('Display Amazon products', async ({ page }) => {
    await page.goto('https://demoqa.com/webtables');
    test('Select third row', async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');

        const rows = page.locator('.rt-tr-group');
        await expect(rows).toHaveCount(4);

        await expect(rows.nth(2)).toContainText('Alden');
    });
});