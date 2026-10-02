import { test, expect } from '@playwright/test';
//test and expect are two named exports from playwright testing library
//test is used to define a testcase
//expect to make assertions(to verify something is true)

test.only('Multi Tab Handling', async ({ browser }) => {
    //async :This function contains asynchronus operations and returns a promise.
    //await means:
//"Pause this function until this asynchronous operation is finished."
//They're not specific to Playwright, but you'll use them constantly because almost every Playwright action takes time (opening a browser, clicking a button, waiting for a page to load, etc.).
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://training.rcvacademy.com/");
await page.locator("//div[@class='col-md-3']//div/child::a").click();


});