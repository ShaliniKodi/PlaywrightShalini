import {test,expect} from "@playwright/test";
test('have title', async ({ page }) => {
await page.goto("https://playwright.dev/");
await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});
test('get started link', async ({page})=> {
await page.goto("https://playwright.dev/");    
await page.getByRole('link',{name:'Get started'}).click();
});
