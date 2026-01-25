Feature: SauceDemo End-to-End Purchase Flow

  Scenario: Add items and complete checkout successfully
    Given I am logged in with username "standard_user" and password "secret_sauce"
    When I add the following items to the cart:
      | item                 |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    And I proceed to checkout with:
      | firstName | lastName | postalCode |
      | Abhaya      | Shrestha      | 4217      |
    Then I should see the order confirmation message "Thank you for your order!"
