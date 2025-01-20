describe('test dev', () => {
  beforeEach(() => {
    cy.visit('/customer/account/edit/')
    
  })

  //Function Positif Edit Username
  it.only('Succes Update account', () => {
    cy.editUsername('tina','oktapiani')
    cy.get('[data-test="title"').should('contain.text', 'Succes Update' )
  })

  //If Last Name empty
  it('FirstName - LastName Empty', () => {
    cy.get('#firstname').type('tinaa')
    cy.get('.save').click()
    cy.verifyErrorMessage('Last Name Empty')    
  })

  //If First Name Empty
  it('LastName - First Name Empty', () => { 
    cy.get('#lastname').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('First Name Empty')
  })

  
})