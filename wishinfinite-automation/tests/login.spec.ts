import { test, expect } from '@playwright/test';
test('Amazon XPath Axes Examples', async ({page}) =>{
await page.goto('https://www.amazon.in/');
const searchbox = page .locator('#twotabsearchtextbox');
await searchbox.fill('iphone');
await searchbox.press("Enter");
await page.locator("//span[contains(text(), 'Get It')]").click();

// const digicontentdevices = page.getByRole('heading',{name:'Digital Content and Devices'});
// console.log(await digicontentdevices.count());
//await page.getByLabel('Digital Content and Devices').click();
//await page.locator("//ul/li/a/child::i[@class='nav-sprite hmenu-arrow-next']").click();
//await page.locator("//span[(text()='iPhone 18 Pro (256 GB) - Burgundy')]/parent::h2").click();
//await expect(page.locator("//span[(text()='iPhone 18 Pro (256 GB) - Burgundy')]/parent::h2")).toBeVisible();
//await page.locator("//a[@id='nav-orders']/child::span[text()='& Orders']").click();
//await page.locator("//li//a[@class='nav-link nav-item']/child::span[text()='Your Account']").click();
});