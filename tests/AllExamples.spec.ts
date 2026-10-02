import { expect, test } from '@playwright/test';
test('All Examples', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.getByPlaceholder('Enter Name').fill('Shalini Kodi');
await page.getByPlaceholder('Enter EMail').fill('shalini.kodi23@gmail.com');
await page.getByPlaceholder('Enter Phone').fill('9700848694');
await page.getByLabel('Address:').fill('Kukatpally');
await page.locator('#Wikipedia1_wikipedia-search-input').fill('Playwright Tutorial');
await page.waitForTimeout(3000);
//await page.getByRole("link",{name:'PlaywrightPractice'}).click();
//await strbtn.screenshot({path:"./Screenshots/images1.jpeg"})
//await page.getByRole("button",{name:'START'}).click();
//await page.screenshot({path:"./Screenshots/images1.jpeg"});
//await page.screenshot({path:'./Screenshots/images1.jpeg',fullPage:true});
const btn = await page.getByRole("button",{name:'Point Me'});
await btn.screenshot({path:"./Screenshots/example1.png"});
await page.screenshot({path:"./Screenshots/example1.png"});
await page.screenshot({path:"./Screenshots/example1.png",fullPage:true});
const [popup] = await Promise.all([
 page.waitForEvent('popup'),
 await page.locator('#PopUp').click(),
 console.log('Clicked to open new popup window')

])
// page.on('dialog',async dialog=>{
// console.log(dialog.message());
// dialog.accept();
// })
// const promptalert = await page.getByRole("button",{name:'Prompt Alert'}).click();
// console.log("Prompt Alert is clicked");
// const inneeletext = await page.getByText('Data Entry Form',{exact:true}).innerText();
// console.log(inneeletext);




});