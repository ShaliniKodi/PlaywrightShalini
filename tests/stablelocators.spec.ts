import { expect, test } from '@playwright/test';
test('Handling fileupload', async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator('#name').fill('Shalini Kodi');
await page.locator('#email').fill('shalini.kodi23@gmail.com')
await page.getByPlaceholder('Enter Phone').fill('9700848694');
await page.getByRole('button',{name:'start'}).click();
await page.getByLabel('Sunday').check();
await page.locator('#male').click();
const headtext = await page.getByRole('heading',{name: 'Alerts & Popups'}).innerText();
console.log(await headtext);
await page.locator('#colors').selectOption('white');
await page.locator('.wikipedia-search-input').fill('books');
page.once('dialog',async dialog=>{
const promptalert = await dialog.message();
console.log("prompt alert is displayed: " + promptalert);
await dialog.dismiss();
const canpromt = await page.locator('#demo').innerText();
console.log(await canpromt);
})
await page.waitForTimeout(3000);
await page.locator('#promptBtn').click();
await page.locator("//button[text()='Point Me']").hover();
await page.locator("//button[text()='Copy Text']").dblclick();
await page.click('#field2');
const srcloc = page.locator('#draggable');
const dscloc = page.locator('#droppable');
await srcloc.dragTo(dscloc);
});
