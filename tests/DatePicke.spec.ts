import { expect, test } from '@playwright/test';
test('Date Picker Handling', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/');
//await page.fill('#datepicker','03/13/2026');
await page.click('#datepicker');
//date picker
const year = "2026";
const month = "June"
const date = "08"
while(true){
    const currentyear = await page.locator('.ui-datepicker-year').textContent();
    const currentmonth = await page.locator('.ui-datepicker-month').textContent();
if(currentyear == year && currentmonth == month)    {
    break;
}
await page.locator('[title="Next"]').click();
}  

});