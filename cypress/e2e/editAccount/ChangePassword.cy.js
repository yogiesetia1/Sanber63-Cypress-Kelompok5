describe('Change Password', () => {
  beforeEach(() => {
    cy.visit('')
    
  })

  // Positif Case - Success Changes Password
  it.only('Positif - Succes Changes Password', () => {
    cy.editEmail('tina29@gmail.com','tinaokta29')
    cy.get('[data-test="title"').should('contain.text', 'Succes Update' )
  })

  // Negatif Case - Current Password Empty
  it('Negatif - Current Password Empty', () => {
    cy.get('#current-password').type('tinatina29')
    cy.get('.save').click()
    cy.verifyErrorMessage('Current Password Empty, ')    
  })

  // Negatif Case - New Password Empty
  it('Negatif - New Password Empty', () => { 
    cy.get('#password').type('tina29tina')
    cy.get('.save').click()
    cy.verifyErrorMessage('Password Empty')
  })

  // Negatif Case - Confirm Password Empty
  it('Negatif - Confirm Password Empty', () => { 
    cy.get('#password-confirmation').type('tina29tina')
    cy.get('.save').click()
    cy.verifyErrorMessage('Password Empty')
  })
})