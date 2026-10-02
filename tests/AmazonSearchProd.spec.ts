import { test, expect } from '@playwright/test';

test('Search Product On Amazon', async ({ page }) => {
await page.goto('https://www.amazon.in');
await page.locator('#twotabsearchtextbox').fill("iphone");
await page.keyboard.press("Enter");
// const pricerefinements = await page.locator('#priceRefinements').innerText();
// console.log(pricerefinements);
const text = await page.locator('div').textContent();
console.log(text);






});