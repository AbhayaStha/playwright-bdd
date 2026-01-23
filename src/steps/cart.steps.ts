import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let loginPage: LoginPage;
let productsPage: ProductsPage;
let checkoutPage: CheckoutPage;

Given('I am logged in with username {string} and password {string}', async function(this: CustomWorld, username: string, password: string) {
  loginPage = new LoginPage(this.page);
  productsPage = new ProductsPage(this.page);
  checkoutPage = new CheckoutPage(this.page);

  await loginPage.navigate('https://www.saucedemo.com/');
  await loginPage.login(username, password);
});

When('I add the following items to the cart:', async function(this: CustomWorld, dataTable) {
  const items = dataTable.hashes();
  for (const row of items) {
    await productsPage.addItemToCart(row.item);
  }
  await productsPage.goToCart();
  await productsPage.clickCheckout();
});

When('I proceed to checkout with:', async function(this: CustomWorld, dataTable) {
  const details = dataTable.hashes()[0];
  await checkoutPage.fillCheckoutForm(details.firstName, details.lastName, details.postalCode);
  await checkoutPage.finishCheckout();
});

Then('I should see the order confirmation message {string}', async function(this: CustomWorld, expectedMessage: string) {
  const confirmation = await checkoutPage.getConfirmationMessage();
  expect(confirmation).toContain(expectedMessage);
});
