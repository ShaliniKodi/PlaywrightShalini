import { expect, Locator, Page } from '@playwright/test';

export class SauceDemoPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly title: Locator;
  readonly sortSelect: Locator;
  readonly cartButton: Locator;
  readonly checkoutButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly backToProductsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.title = page.locator('.title');
    this.sortSelect = page.locator('.product_sort_container');
    this.cartButton = page.locator('#shopping_cart_container');
    this.checkoutButton = page.locator('#checkout');
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.backToProductsButton = page.locator('#back-to-products');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectTitle(text: string) {
    await expect(this.title).toHaveText(text);
  }

  async sortProductsLowToHigh() {
    await this.sortSelect.selectOption({ value: 'lohi' });
  }

  async addProductToCartAtIndex(index: number) {
    await this.page.locator(`.inventory_list > div:nth-child(${index}) button`).click();
  }

  async openCart() {
    await this.cartButton.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }
}
