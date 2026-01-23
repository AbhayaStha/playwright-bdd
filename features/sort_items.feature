Feature: Sort products on SauceDemo

Background:
  Given I am logged in with username "standard_user" and password "secret_sauce"

Scenario: Sort items by price low to high
  When I sort items by "Price (low to high)"
  Then the items should be sorted by price ascending

Scenario: Sort items by price high to low
  When I sort items by "Price (high to low)"
  Then the items should be sorted by price descending

Scenario: Sort items by name A to Z
  When I sort items by "Name (A to Z)"
  Then the items should be sorted by name ascending

Scenario: Sort items by name Z to A
  When I sort items by "Name (Z to A)"
  Then the items should be sorted by name descending
