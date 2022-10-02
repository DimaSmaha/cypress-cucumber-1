import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const base = require("../../pageobjects/Base");
const calculator = require("../../pageobjects/Calculator");

Given("I am on the Telnyx page and click the cookies", () => {
  base.navigate();
  base.CookiesButton.click();
});

//Scenario#3
When("I click on the “Savings Calculator” link", async () => {
  calculator.SavingsCalculatorLink.click({ force: true });
});
Then("I scroll and click into “Messaging API” button", async () => {
  base.scrollandclick(calculator.MessagingAPIButton);
  cy.wait(2000);
});
Then("I click on the “Continue” button", async () => {
  calculator.ContinueButton.click({ force: true });
});
Then("I click on the “+” buttons", async () => {
  calculator.PlusButton.click({ force: true });
  calculator.SecondPlusButton.click({ force: true });
});
Then("I click again on the “Continue” button", async () => {
  calculator.ContinueButton.click({ force: true });
});
Then("I verify the text on the “Calculator” page", async () => {
  calculator.Text.should("include.text", "$");
});
