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
  cy.visit('https://www.demoblaze.com'); // Kunjungi halaman utama
  cy.get('#login2').should('be.visible').click(); // Klik tombol login untuk membuka modal
  cy.get('#logInModal').should('be.visible'); // Verifikasi modal login muncul
  cy.get('#loginusername').type(email); //isi email
  cy.get('#loginpassword').type(password);
  cy.get('button[onclick="logIn()"]').click(); // Klik tombol login
});


  