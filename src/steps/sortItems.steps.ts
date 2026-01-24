import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";

When(
  "I sort items by {string}",
  async function (this: CustomWorld, option: string) {
    await this.productsPage.sortItems(option);
  }
);

Then(
  "the items should be sorted by price ascending",
  async function (this: CustomWorld) {
    const prices = await this.productsPage.getAllProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  }
);

Then(
  "the items should be sorted by price descending",
  async function (this: CustomWorld) {
    const prices = await this.productsPage.getAllProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  }
);

Then(
  "the items should be sorted by name ascending",
  async function (this: CustomWorld) {
    const names = await this.productsPage.getAllProductNames();
    const sorted = [...names].sort();
    expect(names).toEqual(sorted);
  }
);

Then(
  "the items should be sorted by name descending",
  async function (this: CustomWorld) {
    const names = await this.productsPage.getAllProductNames();
    const sorted = [...names].sort().reverse();
    expect(names).toEqual(sorted);
  }
);
