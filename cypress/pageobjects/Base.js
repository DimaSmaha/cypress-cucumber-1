const mainUrl = "https://www.redmine.org/";
class Base {
  navigate() {
    cy.visit(mainUrl);
  }

  scrollAndClick(Element) {
    Element.scrollIntoView();
    Element.click({ force: true });
  }

  generateRandomLogin() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
}
module.exports = new Base();
