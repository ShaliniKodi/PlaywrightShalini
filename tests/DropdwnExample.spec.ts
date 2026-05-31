import { test } from '@playwright/test';
 
test('Print dropdown values - Method 3', async ({ page }) => {
 
    await page.goto('https://www.amazon.in/');
    await page.locator('#nav-search-dropdown-card').click();
    const Alldropdownoptions = await page.locator("//div[@id='nav-search-dropdown-card']");
    await page.keyboard.press("Enter");
    const allddcount = await Alldropdownoptions.count();
    let i = 0;
    while(i<allddcount){
        const textinDD = await Alldropdownoptions.nth(i).innerText(); 
        const valuesinDD = await Alldropdownoptions.nth(i).getAttribute('value');
        console.log(`Option ${i}: value='${valuesinDD}', text='${textinDD}'`);        
    }
    // await page.waitForTimeout(3000);
    // //await page.locator("#searchDropdownBox").click();
    // await page.fill("#twotabsearchtextbox",'soaps');
    // await page.keyboard.press("Enter");   
    
});