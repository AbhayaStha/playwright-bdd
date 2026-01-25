import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutOverviewPage } from "../pages/checkoutOverviewPage";

When('I add the following items:', async function (this: CustomWorld, dataTable) {
  const items = dataTable.hashes().map((row: { item: string }) => row.item);
  const productsPage = new ProductsPage(this.page);

  for (const item of items) {
    await productsPage.addItemToCart(item);
  }

  await productsPage.goToCart();
  await productsPage.clickCheckout();

  await this.page.fill('#first-name', 'Test');
  await this.page.fill('#last-name', 'User');
  await this.page.fill('#postal-code', '0000');
  await this.page.click('#continue'); 
});

Then(
  'I should see the following items on checkout overview:',
  async function (this: CustomWorld, dataTable) {
    const checkoutOverview = new CheckoutOverviewPage(this.page);
    const expectedItems = dataTable.hashes().map((row: { item: string }) => row.item);
    const actualItems = await checkoutOverview.getItemNames();

    expect(actualItems).toEqual(expectedItems);
  }
);

Then('the item prices should match', async function (this: CustomWorld) {
  const checkoutOverview = new CheckoutOverviewPage(this.page);
  const prices = await checkoutOverview.getItemPrices();

  expect(prices.every(p => typeof p === 'number')).toBeTruthy();
});
