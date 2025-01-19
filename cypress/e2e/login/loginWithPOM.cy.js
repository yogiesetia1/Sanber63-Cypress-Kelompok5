const loginPage = require('../../pageObjects/loginPage');

describe('Login - Using POM', () => {
  it('Should login successfully with valid credentials', () => {
    cy.visit('https://www.demoblaze.com'); // Kunjungi halaman utama
    cy.get('#login2').should('be.visible').click(); // Klik tombol login untuk membuka modal
    cy.get('#logInModal').should('be.visible'); // Verifikasi modal login muncul
    loginPage.login('user@example.com', 'password123');
    cy.url().should('include', 'https://www.demoblaze.com/');
  });
});
