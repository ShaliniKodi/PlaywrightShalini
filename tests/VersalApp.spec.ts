import { expect, test } from '@playwright/test';
test('Click Button and Select Drop Down', async ({ page }) => {
await page.goto('https://rightandbright.vercel.app/');
await page.locator("//button[@class='nav-link flex items-center gap-1']").click();
await page.locator("//span[contains(text(),'Automation Practice')]").click();
await page.locator("//button[contains(text(),' Primary ')]").click();
console.log("Primary Button is clicked");
// dropdwnoptions.click();
// //await page.keyboard.press("Arrow Down");
// const selectoptiondro = dropdwnoptions.count();
// console.log(selectoptiondro);
// for (let i = 0; i < selectoptiondro; i++) {
//         const value = await dropdwnoptions.nth(i).textContent();
//          console.log(value + "\n" + " ");
//     }

// await page.waitForTimeout(3000);
// await page.locator("//a[contains(text(),' Download Sample File ')]").click();
// console.log("Downloading a sample file");



});