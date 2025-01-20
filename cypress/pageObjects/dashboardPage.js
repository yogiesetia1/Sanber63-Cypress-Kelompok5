class DashboardPage {
    // Selektor elemen halaman dashboard
    elements = {
      welcomeMessage: () => cy.get('.welcome-message'), // Elemen pesan selamat datang
      userProfile: () => cy.get('.user-profile'),       // Elemen profil pengguna
      logoutButton: () => cy.get('#logout'),           // Tombol logout
    };
  
    // Metode untuk memverifikasi elemen di dashboard
    verifyWelcomeMessage(expectedMessage) {
      this.elements.welcomeMessage().should('contain.text', expectedMessage);
    }
  
    verifyUserProfileVisible() {
      this.elements.userProfile().should('be.visible');
    }
  
    logout() {
      this.elements.logoutButton().click(); // Klik tombol logout
    }
  }
  
  module.exports = new DashboardPage();
  