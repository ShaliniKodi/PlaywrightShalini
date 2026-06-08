import { test,expect,request } from '@playwright/test';
test('apivsformfill', async ({ page }) => {
  const apihandling = await request.newContext();  
  //const api = await request.newContext();
  const res = await apihandling.get('https://api.restful-api.dev/objects');
  expect(res.status()).toBe(200);
  const body = await res.json();
  console.log(body);
  const name = body[0].name;
  console.log(body[0].data.name);
  const address = body[1].data.address;
  console.log(body[1].address);         
await page.goto("https://testautomationpractice.blogspot.com/");
await page.waitForTimeout(5000);
await page.fill("#name",name);
await page.fill("#textarea",address);
console.log("Form filled successfully");
});


