import { expect, test } from '@playwright/test';
test('Locators test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // const lantext = await page.getByText('For Selenium, Cypress &').innerText();
    // console.log(lantext); 
    //await page.getByRole('link',{name:'Online Trainings'}).click();
    //await page.getByPlaceholder('Enter Name').fill('Shalini Kodi');
    await page.getByLabel('Email:').fill('shalini.kodi23@gmail.com');



    // const strtbtn = await page.getByRole('button',{name:'start'}).click();
    // console.log("Start button is clicked" + strtbtn);
    // const dataformtext = await page.getByText('Data Entry Form',{exact:true}).innerText();
    // console.log(dataformtext);
    //await page.getByPlaceholder('Enter Name',{exact:true}).fill('Shalini Kodi')

});