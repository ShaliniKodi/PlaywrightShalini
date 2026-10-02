import { expect, Locator, test } from '@playwright/test';
test('Screenshot', async ({ page }) => {
await page.goto("https://demowebshop.tricentis.com/");
//Locator is an interface which returns group of WebElements
const products:Locator = page.locator('.product-title');
//innertext means exact text,visible text
//textContext means it will display all hidden elements,spaces,line breaks
console.log(await products.nth(2).innerText());
console.log(await products.nth(2).textContent());
const count = await products.count();

for(let i=0;i<count;i++){
    console.log(await products.nth(i).innerText())
}
});