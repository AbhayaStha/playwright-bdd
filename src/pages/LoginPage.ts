import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async getTitle() {
    return await this.page.title();
  }

  async getErrorMessage() {
    return await this.page.textContent('[data-test="error"]');
  }

  async getProductsHeader() {
    return await this.page.textContent('.title');
  }
}
