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
  
  async sortItems(option: string) {
    await this.page.selectOption('.product_sort_container', { label: option });
  }

  async getAllProductNames(): Promise<string[]> {
    return await this.page.$$eval('.inventory_item_name', els => els.map(el => el.textContent?.trim() || ''));
  }

  async getAllProductPrices(): Promise<number[]> {
    return await this.page.$$eval('.inventory_item_price', els =>
      els.map(el => parseFloat(el.textContent?.replace('$', '') || '0'))
    );
  }
}
