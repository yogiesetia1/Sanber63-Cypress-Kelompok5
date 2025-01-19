class LoginPage {
    elements = {
      emailInput: () => cy.get('#loginusername'),
      passwordInput: () => cy.get('#loginpassword'),
      loginButton: () => cy.get('button[onclick="logIn()"]').click(), // Klik tombol login,
    };
  
    login(email, password) {
      this.elements.emailInput().type(email);
      this.elements.passwordInput().type(password);
      this.elements.loginButton().click();
    }
  }
  
  module.exports = new LoginPage();
  