class RegisterPage {
  get loginInput() {
    return cy.get('[id="user_login"]');
  }

  get passwordInput() {
    return cy.get('[id="user_password"]');
  }

  get passwordConfirmInput() {
    return cy.get('[id="user_password_confirmation"]');
  }

  get firstnameInput() {
    return cy.get('[id="user_firstname"]');
  }

  get lastnameInput() {
    return cy.get('[id="user_lastname"]');
  }

  get emailInput() {
    return cy.get('[id="user_mail"]');
  }

  get submitButton() {
    return cy.get('[name="commit"]');
  }

  get successfulRegistration() {
    return cy.get('[id="flash_notice"]');
  }
}
module.exports = new RegisterPage();
