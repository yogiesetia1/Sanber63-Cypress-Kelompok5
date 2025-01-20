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

  if(firstname){
    cy.get('#firstname').type(firstname)
  }
  if(firstname){
    cy.get('#lastname').type(lastname)
  }
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


// Proceed to checkout custom command section [do not edit!!]
Cypress.Commands.add('clickButton', (selector) => {
  cy.get(selector).click()
})

Cypress.Commands.add('inputAddress', (email, firstName, lastName, company, streetAddress, city, state, zip, country, phoneNum) => {
  if(email){
    cy.get('#customer-email').type(email)
  }
  if(firstName){
    cy.get('input[name="firstname"]').type(firstName)
  }
  if(lastName){
    cy.get('input[name="lastname"]').type(lastName)
  }
  if (company) {
    cy.get('input[name="company"]').type(company);
  }
  if(streetAddress){
    cy.get('input[name="street[0]"]').type(streetAddress)
  }
  if(city){
    cy.get('input[name="city"]').type(city)
  }
  if(state){
    cy.get('select[name="region_id"]').select(state)
  }
  if(zip){
    cy.get('input[name="postcode"]').type(zip)
  }
  if(country){
    cy.get('select[name="country_id"]').select(country)
  }
  if(phoneNum){
    cy.get('input[name="telephone"]').type(phoneNum)
  }
})

Cypress.Commands.add('addProduct', () => {
  cy.visit('/')
  cy.xpath("//img[@alt='Radiant Tee']").click()
  cy.clickButton('#option-label-size-143-item-166')
  cy.clickButton('#option-label-color-93-item-50')
  cy.xpath("//span[.='Add to Cart']").click()
  cy.get('.showcart').should('contain','1').click()
  cy.xpath("//div[@class='amount price-container']//span[@class='price']").should('be.visible').get('#top-cart-btn-checkout').click()
  cy.get('#customer-email').should('be.visible')
})
  