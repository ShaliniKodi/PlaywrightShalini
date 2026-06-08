import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
//getByRole:find the elements by their name and role
await page.getByRole("textbox",{name:'Enter Name'}).fill("Shalini");
await page.getByRole("textbox",{name:'Enter EMail'}).fill("shalini.kodi23@gmail.com");
await page.getByRole("textbox",{name:'Enter Phone'}).fill("9700848694");
await page.getByLabel("Address").fill("kukatpally");
await page.locator("//input[@id='female']").click();
await page.locator("#thursday").check();
await page.locator("//input[@id='saturday']").check();
await page.getByLabel("Country:").selectOption("France");
const countrynames = await page.locator('#country').selectOption('Brazil');
 console.log(countrynames);
 const animalname = await page.locator("//select[@id='animals']").selectOption("Lion");
 await page.waitForTimeout(3000);
 console.log(animalname);
 await page.getByRole("button",{name:'START'}).click();
 console.log("Start button is clicked");
//  const button = await page.getByRole("button",{name:'Submit'});
//  console.log(button.click());
 


});
