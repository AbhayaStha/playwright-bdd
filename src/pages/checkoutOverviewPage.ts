// checkoutOverviewPage.ts
import { Page } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  itemNamesLocator() {
    return this.page.locator('.inventory_item_name');
  }

  itemPricesLocator() {
    return this.page.locator('.inventory_item_price');
  }

  async getItemNames(): Promise<string[]> {
    return this.itemNamesLocator().allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const prices = await this.itemPricesLocator().allTextContents();
    return prices.map(p => parseFloat(p.replace('$', '')));
  }
  async proceedToCheckout(): Promise<void> {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
