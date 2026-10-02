import { expect, test } from '@playwright/test';
test('Search Product On Amazon', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.locator('#twotabsearchtextbox').fill('Headphones');
await page.locator("#sac-autocomplete-results-container").click();
const headphonwireless = page.locator("[class='a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal']");
console.log(headphonwireless.click());
console.log("Wireless headphone is visible");
});