import { test, expect } from '@playwright/test';
import * as fs from 'fs';
 
// Reading JSON file
const jsonData3 = fs.readFileSync('./sampletestfolder/Samplejsonfile3.json','utf-8');
const jfile = JSON.parse(jsonData3);
 
test('jsonfilereading', async ({ page }) => {
  //jfile.alertsAndPopups
  const alertsandpopupsname = jfile.alertsAndPopups[0].name; 
  const locatorvalue = jfile.alertsAndPopups[0].locatorvalue;
  const expectedtext = jfile.alertsAndPopups[0].expectedtext;  
   await page.goto('https://testautomationpractice.blogspot.com/');
   await expect(page.locator("//button[contains(text(),'Simple Alert')]")).toHaveText(alertsandpopupsname);
   await expect(page.locator("//button[@id='alertBtn']")).toHaveText(locatorvalue);
   await expect(page.locator("//script[contains(text(),'I am an alert box!')]")).toHaveText(expectedtext);   
   });
 