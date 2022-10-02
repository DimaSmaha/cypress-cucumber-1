Feature: Register account
   Background: 
     Given I am on Redmine website

   Scenario: Verify that user can register account
     When I click on Register Button
     Then I fill up register form
     Then I click Submit button
     Then I verify Notification be shown
   
   