// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//proses login
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login');
  if (email) cy.get('#email').type(email);
  if (password) cy.get('#pass').type(password);
  cy.get('#send2').click();
});

//Edit Account And Address - TINA OKTAPIANI

Cypress.Commands.add('editUsername', (firstname, lastname) => {

  cy.visit('/customer/account/edit/')
  cy.get('#firstname').type(firstname)
  cy.get('#lastname').type(lastname)
  cy.get('.save').click()

})

Cypress.Commands.add('editEmail', (email, password) => {

  cy.visit('/customer/account/edit/')
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.get('.save').click()

})

Cypress.Commands.add('ChangesPassword', (currentpassword, newpassword, confirmpassword) => {

  cy.visit('/customer/account/edit/')
  cy.get('#current-password').type(currentpassword)
  cy.get('#new-password').type(newpassword)
  cy.get('#confirm-password').type(confirmpassword)
  cy.get('.save').click()

})

Cypress.Commands.add('verifyErrorMessage', (message) => {
  cy.get('[data-test="error"]').should(message)
  
})
// End Tina Oktapiani


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
  