import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 
// Reading JSON file
const jsonData2 = fs.readFileSync('./sampletestfolder/Samplejsonfile2.json', 'utf-8');
const jfile = JSON.parse(jsonData2);
 
test('jsonfilereading', async ({ page }) => {
  //jfile.LookingFor
  const username = jfile.users[1].name;
  const useremail = jfile.users[1].email;
  const userphone = jfile.users[1].phone;
  const useraddress = jfile.users[1].address;  
   await page.goto('https://testautomationpractice.blogspot.com/');
    await page.fill("//input[@id='name']", username);
    await page.fill("//input[@id='email']", useremail);
    await page.fill("//input[@id='phone']",userphone );
    await page.fill("//textarea[@id='textarea']",useraddress );
    
  
 
  
 
});
 