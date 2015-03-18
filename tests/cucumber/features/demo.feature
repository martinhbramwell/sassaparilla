Feature: "Original Fiennes Edition" can be viewed if demo mode is active

  As a new user I want to be able to refer to the original version of Sassaparilla

  Scenario:  Switch to "Original Fiennes Edition"
    Given I'm on the home page
    And demo mode is set
    When I click on "Original Fiennes Edition"
    Then "Start your next web project" will be the page slogan
    


