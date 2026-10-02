import { test, expect } from '@playwright/test';

test('Arrival and Destination of flight', async ({ page }) => {
await page.goto("https://www.amazon.com/");
// const secondrowcolumn = await page.locator("//table/tbody/tr[2]/td[4]");
// console.log(await secondrowcolumn.innerText());
// const thirdrowseccolum = await page.locator("//table/tbody/tr[3]/td[2]");
// console.log(await thirdrowseccolum.innerText());
// const thirdrowelement = await page.locator("//tbody//tr[3]");
// console.log(thirdrowelement.innerText());
// const thirdrow = await page.locator("//table//tbody/tr[3]/td[2]");
// console.log(await thirdrow.innerText())
//const amazonpayproducts = await page.locator("//div[@class='navFooterVerticalColumn navAccessibility']/div/div[5]/div");
const amazonpayproducts = page.locator("//div[text()='Amazon Payment Products']")
console.log(await amazonpayproducts.innerText());
const amazonprod = page.locator("//div[@class='navFooterVerticalColumn navAccessibility']/div/div[5]/ul");
const amazonpayelements = await amazonprod.count();
for(let i=0;i<amazonpayelements;i++){
      console.log(await amazonprod.nth(i).textContent());
  }

});
