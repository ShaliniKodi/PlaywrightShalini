import { test, expect } from '@playwright/test';

test('Arrival and Destination of flight', async ({ page }) => {
    await page.goto("https://blazedemo.com/");
    const departure = page.locator("//select[@name='fromPort']").selectOption('Portland');
    const destination = page.locator("//select[@name='toPort']").selectOption('London');
    await page.click("//input[@class='btn btn-primary']");
    //await page.click("//input[@value='Choose This Flight']");
    // const rows = await page.locator("//table/tbody/tr");
    // const countelem = await rows.count();
    // console.log(`Found ${countelem} products`)
    //for (let i = 0; i < countelem; i++) {
       // console.log(await rows.nth(i).innerText());

        const columns = await page.locator("//table/tbody/tr/td");
        const columncount = await columns.count();
        console.log(`Found ${columncount} products`);
        for (let i = 0; i < columncount; i++) {
            console.log(await columns.nth(i).textContent());
        }
        


    







});

