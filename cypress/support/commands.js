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

//proses login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login');
  if (email) cy.get('#email').type(email);
  if (password) cy.get('#pass').type(password);
  cy.get('#send2').click();
});



// Proceed to checkout command section [do not edit!!]
Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).click()
})

Cypress.Commands.add('inputAddress', (email, firstName, lastName, company, streetAddress, city, state, zip, country, phoneNum) => {
  cy.get('#customer-email').type(email)
  cy.get('input[name="firstname"]').type(firstName)
  cy.get('input[name="lastname"]').type(lastName)
  if (company) {
    cy.get('input[name="company"]').type(company);
  }
  cy.get('input[name="street[0]"]').type(streetAddress)
  cy.get('input[name="city"]').type(city)
  cy.get('select[name="region_id"]').select(state)
  cy.get('input[name="postcode"]').type(zip)
  cy.get('select[name="country_id"]').select(country)
  cy.get('input[name="telephone"]').type(phoneNum)
})
  