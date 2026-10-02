import { test, expect } from '@playwright/test';
import path from 'path';
test.only('Handling Dynamic Elements', async ({ page }) => {
await page.goto("https://automationexercise.com/");
await page.locator(".single-products").allInnerTexts();
//const allrows = page.locator("//table[@id='taskTable']/tbody").allInnerTexts();
// console.log(await allrows);
// const allrows = page.locator("//table[@id='taskTable']/tbody").allTextContents();
// console.log(await allrows);
// const rowtext = page.locator("//table[@id='taskTable']/tbody/tr[1]").innerText();
// console.log(await rowtext);
// const products = await page.locator(".single-products").allInnerTexts();
// console.log(await products);
// const products = await page.locator(".single-products");
// const productlist = await products.count();
// for(let i=0;i<productlist;i++){
//     console.log(products.nth(i).allInnerTexts());
// }

await page.locator('button:has-text("View Product")').click();

});