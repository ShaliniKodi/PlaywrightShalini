import { expect, test } from '@playwright/test';
test('Handling fileupload', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
const staticwebtable = page.locator("//table[@name='BookTable']/tbody/tr/td");
const staticrows = await staticwebtable.count();
console.log(staticrows);
const ststwebrow = page.locator("//table[@name='BookTable']/tbody/tr[3]");
console.log(await ststwebrow.innerText());
const fourthrows = page.locator("//table[@name='BookTable']/tbody/tr[4]");
console.log(await fourthrows.allInnerTexts());
await expect(fourthrows).toHaveCount(1);

for(let i=0;i<staticrows;i++){
    const staticrowsandcols = await staticwebtable.nth(i).allInnerTexts();
    console.log(staticrowsandcols);     
}
const row = page.locator('table tbody tr').filter({
  hasText: 'David'
});
console.log(await row.allInnerTexts());

});
//   const staticrowelem =  await staticwebtable.nth(3).innerText();
//   console.log(staticrowelem)




// const filepath = "./UploadFile/sample.pdf";
// await page.locator("//input[@id='multipleFilesInput']").setInputFiles(filepath);
// await page.click("//button[text()='Upload Multiple Files']");
// await page.screenshot({path:'./Screenshots/images9.png',fullPage:true});
// const strtbtn = page.locator("//button[text()='START']");
// await strtbtn.screenshot({path:'./Screenshots/images9.png'});
// const textelem = page.locator("//div//h2[text()='Dynamic Button']");
// await expect(textelem).toHaveText('Dynamic Button');
// const laptoplinks = page.locator("//div[@id='broken-links']/a");
// const links = await laptoplinks.count();
// console.log(links);
// await expect(laptoplinks).toHaveCount(8);

// const dynamictable = page.locator('table tbody tr');
// const tablerowsandcols = await dynamictable.count();
// for(let i=0;i<tablerowsandcols;i++){
// await dynamictable.nth(i).textContent();
// const frameelem = page.frameLocator('#iframe1');
// const frametext = frameelem.locator()
// await expect(frameelem)




// page.on('dialog',async dialog=>{
// const prommsg = dialog.message();
// console.log("Prompt Message is displayed: " + prommsg);
// await page.waitForTimeout(2000);
// await dialog.dismiss();
// });
// await page.locator("//button[@id='promptBtn']").click();



//console.log(await page.title());
// await page.getByPlaceholder('Enter Name').fill('Shalini kodi');
// await page.getByPlaceholder('Enter EMail').fill('Shalini.kodi23@gmail.com');
//await page.getByRole("button",{name:'start'}).click();
//await page.selectOption('#country','Canada');
// await page.waitForTimeout(3000);
// const dropdwn = page.locator('#country');
// //await dropdwn.selectOption({value:'uk'});
// await dropdwn.selectOption({index:3});


