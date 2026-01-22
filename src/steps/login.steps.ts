import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;

Given("I open the browser", async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
});

When("I navigate to {string}", async function (this: CustomWorld, url: string) {
  await loginPage.navigate(url);
});

When("I login with username {string} and password {string}", async function (this: CustomWorld, username: string, password: string) {
  await loginPage.login(username, password);
});

Then("I should see the message {string}", async function (this: CustomWorld, message: string) {
  // Check if login successful (Products page) or error message
  if (message === "Products") {
    const header = await loginPage.getProductsHeader();
    expect(header).toContain(message);
  } else {
    const error = await loginPage.getErrorMessage();
    expect(error).toContain(message);
  }
});
