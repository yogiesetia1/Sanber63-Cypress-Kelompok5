class LoginPage {
    elements = {
      emailField: () => cy.get('#email'),
      passwordField: () => cy.get('#pass'),
      loginButton: () => cy.get('#send2'),
    };
  
    login(email, password) {
      this.elements.emailField().type(email);
      this.elements.passwordField().type(password);
      this.elements.loginButton().click();
    }
  }
  
  module.exports = new LoginPage();
  