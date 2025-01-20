describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/customer/account/edit/')
    
  })

  it.only('Positif - Succes Changes Password', () => {
    cy.editEmail('tina29@gmail.com','tinaokta29')
    cy.get('[data-test="title"').should('contain.text', 'Succes Update' )
  })

  it('Negatif - Current Password Empty', () => {
    cy.get('#current-password').type('tinaa')
    cy.get('.save').click()
    cy.verifyErrorMessage('Current Password Empty, ')    
  })

  it('Negatif - New Password Empty', () => { 
    cy.get('#password').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('Password Empty')
  })

  it('Negatif - Confirm Password Empty', () => { 
    cy.get('#password-confirmation').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('Password Empty')
  })
})