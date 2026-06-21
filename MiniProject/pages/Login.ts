import { Page, Locator } from '@playwright/test';
exports.LoginPage = class LoginPage {
    username_textbox: Locator;
    password_textbox: Locator;
    login_button: Locator;
    page: Page;
    constructor(page: Page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' });
    }
    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username:string,password:string){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();


    }
}