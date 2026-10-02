import { expect,test } from '@playwright/test';

test('Display Amazon products', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  const helpproducts = page.locator("//div[@id='navFooter']//div[7]//ul");
  
  const helpprod = await helpproducts.count();
  console.log(`Found ${helpprod} products`)
  for(let i=0;i<helpprod;i++){
    console.log(await helpproducts.nth(i).textContent());
  } 
    });