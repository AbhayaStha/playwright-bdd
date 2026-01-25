import { setWorldConstructor, World, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutOverviewPage } from "../pages/checkoutOverviewPage";



setDefaultTimeout(60 * 1000); // 60 seconds

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  productsPage!: ProductsPage;
  checkoutPage!: CheckoutPage;
  checkoutOverviewPage!: CheckoutOverviewPage;

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
