// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'); // Kunjungi halaman utama
  // cy.get('.header .authorization-link > a').click();  // Klik tombol login di header
  // cy.get('#login-form').should('be.visible'); // Verifikasi form login muncul
  cy.get('#email').type(email); // Isi email
  cy.get('#pass').type(password); // Isi password
  cy.get('#send2').click(); // Klik tombol login
  // cy.get('.greet').should('contain', 'Welcome'); // Verifikasi login berhasil
});



  