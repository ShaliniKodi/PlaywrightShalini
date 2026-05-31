import { expect, test } from '@playwright/test';
test('String Operations', async ({ page }) => {
await page.goto('https://www.amazon.in/');
await page.locator("//input[@id='twotabsearchtextbox']").fill("Washing Machine");
await page.keyboard.press("Enter");
let searchvalues:string = "//div[@class='a-section a-spacing-none s-breadcrumb-header-text']//span[1]"
console.log(searchvalues);
await page.waitForTimeout(5000);
let msg: string = "1-16 of over 10,000 results for";
//div[@class='a-section a-spacing-none s-breadcrumb-header-text']//span[1]
console.log(msg.length);
console.log(msg.indexOf("1-16"));  
console.log(msg.indexOf("10,000"));
console.log(msg.charAt(9));


let res = msg.split(" ");
console.log(res); // Output: ["i", "love", "PlayWright"]
 
let strarry: string[] = ["1-16", "of", "over","10,000","results","for"];
console.log(strarry[0]);
console.log(strarry[3]);
let hobbies: String[] = ["Reading", "Traveling", "Cooking"];


}); 