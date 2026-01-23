import { Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addItemToCart(itemName: string) {
    const buttonSelector = `text="${itemName}" >> xpath=../../.. >> button:text("Add to cart")`;
    await this.page.click(buttonSelector);
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async clickCheckout() {
    await this.page.click('#checkout');
  }
}
