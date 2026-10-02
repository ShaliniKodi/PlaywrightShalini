import { test, expect } from '@playwright/test';
import path from 'path';
test.only('Handling Stable Locators', async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/");
// const heading = page.getByRole('heading',{name:'Welcome to the-internet'}).innerText();
// console.log(await heading);
// const examtextelem = page.getByText('Available Examples').innerText();
// console.log(await examtextelem);
//await page.locator("//div[@id='content']/ul/li[3]").click();
// const basicauth = page.locator("//div[@id='content']/ul/li[3]").innerText();
// console.log(await basicauth);
// const links = page.locator("//div[@id='content']/ul/li").allTextContents();
// console.log(await links);
//await page.getByRole('link',{name:'Drag and Drop'}).click();
// const draggelem = await page.locator('#column-a');
// const droppelem = await page.locator('#column-b');
// await draggelem.dragTo(droppelem);
// console.log("Element is dragged and dropped");
// await page.locator("//li/a[text()='Dropdown']").click();
// await page.locator("//select[@id='dropdown']").selectOption({index:2});
// const dropdwnelem = page.getByRole('heading',{name:'Dropdown List'}).innerText();
// console.log(await dropdwnelem);
// const dropdwnelem1 = page.getByText('Dropdown List').innerText();
// console.log(await dropdwnelem1);
// await page.getByRole('link',{name:'Checkboxes'}).click();
// const checkbox2 = await page.locator("//form[@id='checkboxes']//input[2]").uncheck();
// const checkbox1 = await page.locator("//form[@id='checkboxes']//input[1]").check();
//await page.locator("//li/a[text()='Dynamic Content']").click();
 const [download] = await Promise.all([
 page.waitForEvent('download'),
 await page.click("//a[text()='File Download']"),
 await page.click("//a[text()='users.json']")
 ])
 const [downloadPath] = path.join('./Screenshots','Users.json');
 await download.saveAs(downloadPath)
 console.log("File saved to:" , downloadPath);



})







