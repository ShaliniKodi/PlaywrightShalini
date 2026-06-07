import { test } from '@playwright/test';
import { SauceDemoPage } from '../pages/SauceDemoPage';

test('Sauce Demo checkout using page object model', async ({ page }) => {
  const sauceDemo = new SauceDemoPage(page);

  await sauceDemo.goto();
  await sauceDemo.login('standard_user', 'secret_sauce');
  await sauceDemo.expectTitle('Products');

  await sauceDemo.sortProductsLowToHigh();
  await sauceDemo.addProductToCartAtIndex(2);
  await sauceDemo.openCart();

  await sauceDemo.expectTitle('Your Cart');
  await sauceDemo.clickCheckout();

  await sauceDemo.expectTitle('Checkout: Your Information');
  await sauceDemo.fillCheckoutInformation('Sandesh', 'G', '07304');

  await sauceDemo.expectTitle('Checkout: Overview');
  await sauceDemo.finishCheckout();

  await sauceDemo.expectTitle('Checkout: Complete!');
  await sauceDemo.backToProducts();
});
 