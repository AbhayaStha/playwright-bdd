import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

Given("I open the browser", async function (this: CustomWorld) {
  await this.launchBrowser();
  this.loginPage = new LoginPage(this.page);
});

When("I navigate to {string}", async function (this: CustomWorld, url: string) {
  await this.loginPage.navigate(url);
});

When("I login with username {string} and password {string}", async function (this: CustomWorld, username: string, password: string) {
  await this.loginPage.login(username, password);

  this.productsPage = new ProductsPage(this.page);
});

Then("I should see the message {string}", async function (this: CustomWorld, message: string) {
  // Check if login successful (Products page) or error message
  if (message === "Products") {
    const header = await this.loginPage.getProductsHeader();
    expect(header).toContain(message);
  } else {
    const error = await this.loginPage.getErrorMessage();
    expect(error).toContain(message);
  }
});
