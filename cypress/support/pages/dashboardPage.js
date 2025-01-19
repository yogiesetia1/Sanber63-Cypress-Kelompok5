class DashboardPage {
    elements = {
      welcomeMessage: () => cy.get('.welcome-msg'),
      logoutLink: () => cy.get('.logout-link'),
    };
  
    verifyWelcomeMessage() {
      this.elements.welcomeMessage().should('contain', 'Welcome');
    }
  }
  
  module.exports = new DashboardPage();
  