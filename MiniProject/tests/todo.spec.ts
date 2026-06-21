import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Grocery');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('go for a walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy Grocery' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-list')).toContainText('go for a walkplay');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator(".todo-list li")).toHaveCount(2);
});