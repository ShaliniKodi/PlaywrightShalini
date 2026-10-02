import {chromium,test,expect} from "@playwright/test";
test('Async and await example', async () => {
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();   
await page.goto("https://www.google.com/");
await page.getByLabel("Google apps").click();
console.log("This is My first Test");    
});