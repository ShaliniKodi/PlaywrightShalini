import { test, expect } from '@playwright/test';

test('Read element from iframe', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  const swagtext = page.locator("//div[text()='Swag Labs']").innerText();
  console.log(await swagtext);
  await expect(page.locator("//div[text()='Swag Labs']")).toHaveText('Swag Labs');
  await expect(page.locator('#login-button')).toBeEnabled();
  await expect(page.locator('#login-button')).toBeVisible();
  await expect(page.locator('#login-button')).toHaveId('login-button');
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator('#login-button').click();


  
  

  


  
  
});


// const iframe = await page.frameLocator('#internal-iframe');
// const fullname = iframe.locator('#iframe-name-input').fill('Jane Doe')
// console.log(await fullname)
// const email = await iframe.locator('#iframe-email-input').fill('jane@example.com')
// console.log(email);
// await iframe.locator('#iframe-role-select').selectOption('Editor');
// await iframe.locator('#iframe-submit-btn').click();
//await page.getByRole('link',{name:'apple'}).click();
// const mobiletext = await page.getByText('Samsung',{exact:true}).innerText();
// console.log(mobiletext)
// const pagithirdelem = page.locator("//table[@id='productTable']/tbody/tr[1]/td[3]").innerText();
// console.log(await pagithirdelem);
// const precedingelem = page.locator("//table[@id='productTable']/tbody/tr[1]/td[3]/preceding::td[1]").innerText();
// console.log(await precedingelem);
// const thridrow = page.locator("//table[@id='productTable']/tbody/tr[3]").allInnerTexts();
// console.log(await thridrow);
// await page.locator('#tuesday').check();
// await page.locator('#female').click();
//await page.locator("//table[@id='productTable']/tbody/tr[3]/td[4]").click();
// await page.locator('#chk-python').uncheck();
// await page.locator('#chk-js').check();
//await page.locator('#radio-banana').click();    
// await page.locator('#rememberUn').click();
// expect(page.locator('#rememberUn')).toBeChecked();
// const iframe1 = page.frameLocator('#iframe-frame-2');
// await iframe1.locator('#iframe-increment').click();

