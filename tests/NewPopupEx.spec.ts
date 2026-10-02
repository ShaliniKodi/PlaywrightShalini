import { expect, test } from '@playwright/test';
test('popup Handling', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
// const [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//  await page.getByText('Popup Windows',{exact:true}).click(),
//  console.log('New Tab is clicked')
//])
//Mouse Hover Example
// await page.getByRole('button',{name:'Point Me'}).hover();
// await page.getByRole('link',{name:'Laptops'}).click();
//copy Text Example
// await page.locator("//button[text()='Copy Text']").dblclick();
// await page.locator("//input[@id='field2']").click();
//Drag and Drop Example
// const sorceelem = await page.locator("//div[@id='draggable']");
// const destielem = await page.locator("//div[@id='droppable']");
// await page.waitForTimeout(3000);
// sorceelem.dragTo(destielem);
//scolling drop down
await page.getByPlaceholder('Select an item').click();
await page.locator('#dropdown').selectOption({label:'Item 12'});
});