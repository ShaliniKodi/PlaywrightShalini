import { expect, test } from '@playwright/test';
test('dialog Accept', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    // Set up dialog listener BEFORE clicking
    page.once('dialog', async dialog => {
        // Capture the text
        let alertText = dialog.message();
        console.log('Alert text captured:', alertText);
        // Verify text
        expect(alertText).toBe('I am a JS Alert');
        await console.log('Type:', dialog.type);
        await page.waitForTimeout(2000)
        // Accept the dialog      
        await dialog.accept();
    });
        await page.click('button[onclick="jsAlert()"]'

        );
    });