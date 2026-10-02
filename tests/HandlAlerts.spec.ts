import { expect, test } from '@playwright/test';
test('Handling Alerts', async ({ page }) => {

await page.goto('https://playwrightlab.github.io/?utm_source=chatgpt.com');
page.on('dialog',async dialog=>{
const nativepromptalert = dialog.message();
console.log("Native Prompt alert message is displayed successfully: " + nativepromptalert);
await dialog.accept();
// const propmtalert = dialog.message();
// console.log("Native Prompt alert message is displayed successfully: " + propmtalert);
// await dialog.accept();
})
await page.getByTestId('native-prompt').click();

});