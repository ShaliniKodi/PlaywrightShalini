import { expect, test } from '@playwright/test';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
 
test('Download file to Local folder', async ({ page }) => {
  
  const workbook = new ExcelJS.Workbook();
  const filePath = path.resolve(__dirname, '../TestDataFolder/New (2).xlsx');
  await workbook.xlsx.readFile(filePath);
  const sheet1 = workbook.getWorksheet(1);
  const sheet2 = workbook.getWorksheet(2);
  if (!sheet1) {
  throw new Error('Sheet $ $ $ $. not found');
  }
  if (!sheet2) {
  throw new Error('Sheet $ $ $ $. not found');
  }
  const row = sheet1.getRow(3);
  const row1 = sheet2.getRow(4);
  const username = row1.getCell(1).text;
  const password = row.getCell(2).text;
  console.log(username);
  console.log(password); 
  await page.goto('https://www.saucedemo.com/');
    await page.fill("//input[@name='user-name']", username);
    await page.fill("//input[@name='password']", password);
 
});
 