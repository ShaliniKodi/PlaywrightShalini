import { expect, Locator, test } from '@playwright/test';
test('Handling Innertext and Text Content', async ({ page }) => {
await page.goto("https://demowebshop.tricentis.com/digital-downloads");
const digitalprod:Locator = page.locator(".product-item");

console.log(await digitalprod.nth(2).innerText());
console.log(await digitalprod.nth(2).textContent());
const count = await digitalprod.count();
for(let i=0;i<count;i++){
 //innertext will return string   
 const products = console.log(digitalprod.nth(i).innerText());//extracts plain text eliminate spaces and line breaks.
 console.log(products); //textcontent will return null or string
 //will return the text of single webelement.
 //const productele: null|string = await digitalprod.nth(i).textContent();//text included with spaces and line breaks.  console.log(productele?.trim());
//example for allinnertext and alltextcontent

}

});