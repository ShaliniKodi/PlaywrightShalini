import { test, expect } from '@playwright/test';

test('Xpath handling functions', async ({ page }) => {
  
await page.goto("https://datatables.net/examples/core/data_sources/dom.html");
//const rows = page.locator("//table[@id='example']//tbody/tr").nth(2);
//const duplicaterows = await rows.count();
// for(let i=0;i<await rows.count();i++){
// const cells = rows.nth(i).locator("td");
// const values = await cells.allTextContents();
// console.log(values);
// }
// const row = page.locator("//table[@id='example']//tbody/tr",{hasText:"Software Engineer"});
// await expect(row).toBeVisible();
// const columndata = await rowdata.locator("td").allTextContents();
// console.log(columndata);
// const thirdcolumndata = await page.locator("//table[@id='example']//tbody/tr/td[3]").allTextContents();
// // console.log(thirdcolumndata);
// const firstrow = page.locator("//table[@id='example']/tbody/tr/td[2]",{hasText:'Accountant'});
// console.log(firstrow);
// await expect(firstrow).toHaveText("Accountant");
// await expect(firstrow).toBeVisible();
page.locator("//table[@id='example']/tbody/tr[3]/td[3]",{hasText:'San Francisco'});

});