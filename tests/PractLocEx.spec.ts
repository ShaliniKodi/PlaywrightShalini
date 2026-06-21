import { expect, test } from '@playwright/test';
test('Practise of page Locators', async ({ page }) => {

await page.goto('https://www.amazon.com/');
//await page.getByLabel("Email:").fill("testcodeautomate@gmail.com");
//page.getByPlaceholder('Username').fill("Admin");
//console.log(await page.getByText("Tab").textContent());
//await page.getByAltText("Headphones").click();

console.log(await page.getByTitle("Amazon.com. Spend less. Smile more."));


}); 