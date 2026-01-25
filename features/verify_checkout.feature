Feature: SauceDemo checkout verification

Background:
  Given I am logged in with username "standard_user" and password "secret_sauce"
  When I add the following items:
    | item                 |
    | Sauce Labs Onesie    |
    | Sauce Labs Bike Light|

Scenario: Verify items and prices on checkout overview page
  Then I should see the following items on checkout overview:
    | item                 |
    | Sauce Labs Onesie    |
    | Sauce Labs Bike Light|
  And the item prices should match