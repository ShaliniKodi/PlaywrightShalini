import { test, expect } from '@playwright/test';

test('Xpath handling functions', async ({ page }) => {
  
await page.goto("https://testautomationpractice.blogspot.com/");

const popwindow = page.waitForEvent('popup');

await page.click("//button[text()='New Tab']");

const popprom = await popwindow;

await popprom.waitForLoadState();

console.log(await popprom.title());

//await popprom.close();
//bring to front means it will move to the original page.
await popprom.bringToFront();
// const textelem = await page.locator("div p span").innerText();
// console.log(textelem);
// const brokenlinkelem = await page.locator("//div[@id='broken-links']/a").
// nth(0).allInnerTexts();
// console.log(brokenlinkelem);
//await page.click("//div[@id='broken-links']/a[8]");
// const secondcomn = await page.locator("tbody tr td").allInnerTexts();
// console.log(secondcomn);
});
