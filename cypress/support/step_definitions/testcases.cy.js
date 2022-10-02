import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Base from "../../pageobjects/Base";
import MainPage from "../../pageobjects/MainPage";
import RegisterPage from "../../pageobjects/RegisterPage";

Given("I am on Redmine website", () => {
  Base.navigate();
});

//Scenario#1
When("I click on Register Button", async () => {
  MainPage.RegisterButton.click();
});
Then("I fill up register form", async () => {
  RegisterPage.loginInput.type(Base.generateRandomLogin());
  RegisterPage.firstnameInput.type("Dimas");
  RegisterPage.lastnameInput.type("Smaha");
  RegisterPage.passwordInput.type("qwerty");
  RegisterPage.passwordConfirmInput.type("qwerty");
  RegisterPage.emailInput.type(Base.generateRandomLogin() + "@gmail.com");
});
Then("I click Submit button", async () => {
  RegisterPage.submitButton.click();
});
Then("I verify Notification be shown", async () => {
  RegisterPage.successfulRegistration.should("be.visible");
});

//Here u write other Scenarios just again write when,then
