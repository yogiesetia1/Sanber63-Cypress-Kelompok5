describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/customer/account/edit/')
    
  })

  //Function positif Edit Email
  it.only('Positif Succes Update Email', () => {
    cy.editEmail('tina29@gmail.com','tinaokta29')
    cy.get('[data-test="title"').should('contain.text', 'Succes Update' )
  })

  //If Password Empty
  it('Check Email - Password Empty', () => {
    cy.get('#email').type('tinaa')
    cy.get('.save').click()
    cy.verifyErrorMessage('Email Empty')    
  })

  //If Email Empty
  it('Check Password - Email Empty', () => { 
    cy.get('#password').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('Password Empty')
  })



})