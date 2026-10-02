import {test } from '@playwright/test';
import { chromium } from 'playwright';
test('Multiple Browsers-Contexts-Pages', async ({ page }) => {
const browser = await chromium.launch();
const user1 = await browser.newContext();
const user2 = await browser.newContext();
const page1 = user1.newPage();
const page2 = user2.newPage();
});