// class A{
//     display1(){
//         console.log("display 1 method of class A")
//     }
// }
// class B extends A{
// display2(){
//         console.log("display 2 method of class B")

// }
// }
// const obj = new B();
// obj.display1();
// obj.display2();
import { expect, test } from '@playwright/test';
test('Orange HRM Login', async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByRole("textbox",{name:'username'}).fill("Admin");
await page.getByRole("textbox",{name:'password'}).fill("admin123");
await page.locator("//button[text()=' Login ']").click();
});