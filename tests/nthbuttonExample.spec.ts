import { test, expect } from '@playwright/test';

test('Arrival and Destination of flight', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/");
await page.getByRole("link",{name:'Add/Remove Elements'}).click();
const row = page.getByRole('button',{name:'Add Element'});
console.log(row.nth(2).textContent());

});