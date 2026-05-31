import { expect, test } from '@playwright/test';
test('String Operations', async ({ page }) => {
await page.goto('https://www.amazon.com');
await page.locator("//input[@id='twotabsearchtextbox']").fill("Keyboard");
await page.keyboard.press("Enter");
let delivertext:string = await page.locator("//div//span[@id='nav-link-accountList-nav-line-1']").innerText();
console.log(delivertext);
let signintext: string = "Hello, sign in";
console.log(signintext.split(","));
console.log(signintext.indexOf("Hello"));
console.log(signintext.charAt(7));
console.log(signintext.length);
console.log(signintext.substring(7,14));

});