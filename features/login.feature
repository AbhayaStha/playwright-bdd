Feature: SauceDemo Login

  Scenario Outline: User logs in with valid or invalid credentials
    Given I open the browser
    When I navigate to "https://www.saucedemo.com/"
    And I login with username "<username>" and password "<password>"
    Then I should see the message "<message>"
    Examples:
      | username        | password     | message                          |
      | standard_user   | secret_sauce | Products                         |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.|
      | invalid_user    | wrong_pass   | Username and password do not match any user in this service|
    