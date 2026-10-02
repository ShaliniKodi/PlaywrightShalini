import { test, expect } from '@playwright/test';

test('Xpath handling functions', async ({ page }) => {
  
  await page.goto("https://testautomationpractice.blogspot.com/");
  // await page.screenshot({path:"./Screeshots/images6.jpeg"});
  // const startbtn = page.locator("//button[text()='START']");
  // await startbtn.screenshot({path:"./Screeshots/images6.jpeg"});
  await page.screenshot({path:"./Screenshots/images8.jpeg"})
  const entryformelem = page.locator("//h3/a[text()='Data Entry Form']");
  await entryformelem.screenshot({path:"./Screenshots/images8.jpeg"});
  


  //locate element by exact text
  // const seltext = await page.locator("//div//span[text()='For Selenium, Cypress & Playwright']").innerText();
  // console.log(seltext)
  //if we want to take only partial text we have to use contains
  // const partextelem = await page.locator("//div[@id='HTML12']//h2[contains(text(),'Dynamic')]").innerText();
  // console.log(partextelem);
  // const onlinetraelem = await page.locator("//div[@class='widget-content']/ul/li[3]");
  // console.log(onlinetraelem);
  //await expect(heading).toBeVisible();
  //await page.locator("//input[@id='name']").fill('Shalini');
  
  
  
  

});