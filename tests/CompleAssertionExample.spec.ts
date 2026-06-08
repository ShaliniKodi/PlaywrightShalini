import { test, expect } from '@playwright/test';

test.only('Form controls using getByRole', async ({ page }) => {
await page.goto("https://demoqa.com/automation-practice-form");
await page.waitForTimeout(2000);
const firstname = page.getByRole('textbox',{name:'First Name'});
await firstname.fill("Shalini");
const lastname = page.getByRole('textbox',{name:'Last Name'});
await lastname.fill("Kodi");
const email = page.getByRole('textbox',{name:'name@example.com'});
await email.fill("shalini.kodi23@gmail.com");
//radio button
const femail = page.getByRole('radio',{name:'Female'});
await femail.check();
const sportscheckbox = page.getByRole('checkbox',{name:'Sports'});
await sportscheckbox.check();
//Assertions
expect(firstname).toHaveValue("Shalini");
expect(lastname).toHaveValue("Kodi");
expect(email).toHaveValue("shalini.kodi23@gmail.com");
expect(femail).toBeChecked();
expect(sportscheckbox).toBeChecked();
//submit button
const submit = page.getByRole('button',{name:'submit'});
await submit.click();

});