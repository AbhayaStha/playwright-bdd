# **SauceDemo Playwright BDD Automation**

This repository contains a **Playwright BDD (Cucumber) test automation framework** for the [SauceDemo](https://www.saucedemo.com/) web application. The tests include end-to-end flows, checkout verification, and generate HTML reports using 'cucumber-html-reporter'.  

---

## **Table of Contents**

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Running Tests](#running-tests)  
- [Reports](#reports)  
- [Author](#author)  

---

## **Project Overview**

This project automates **SauceDemo e-commerce flows** using **Playwright** and **BDD with Cucumber**. It covers:

- Logging in with valid/invalid users  
- Adding items to cart  
- Verifying items and prices on checkout overview  
- Completing end-to-end purchase flows  
- Generating structured HTML reports  

---

## **Features**

- Login automation for standard users  
- Add multiple items to cart and verify  
- Checkout process simulation  
- Item and price verification on **checkout overview page**  
- **HTML report generation** via 'cucumber-html-reporter'  
- Supports **running individual feature files**  
- Cross-platform compatible (Mac, Windows, Linux)  

---

## **Tech Stack**

- **Language:** TypeScript  
- **Automation Framework:** Playwright  
- **BDD:** Cucumber  
- **Reporting:** cucumber-html-reporter  
- **Assertions:** Playwright Test + Expect  
- **Version Control:** Git / GitHub


## **Installation**

1. Clone the repository:
```bash
git clone https://github.com//playwright-bdd-saucedemo.git
cd playwright-bdd-saucedemo
```

2. Install dependencies:
```bash
npm install
```

## **Running Tests**

### Run all tests
```bash
npm test
```

### Run a specific feature file
```bash
npm test -- features/verify_checkout.feature
```

## **Reports**

After running tests, a JSON report will be generated at:
```
reports/cucumber-report.json
```

### Generate HTML Report

You can generate an HTML report using cucumber-html-reporter:
```bash
node generate-report.js
```

The HTML report will be available at:
```
reports/cucumber-report.html
```

## **Author**
 Abhaya Shrestha
