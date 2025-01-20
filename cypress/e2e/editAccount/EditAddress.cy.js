describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/customer/address/edit/')
    
  })

  it.only('Positif - Success Changes Address', () => {
    cy.ChangesAddress()
    cy.get('[data-test="title"').should('contain.text', 'Success Update Address' )
  })

  //if Last name Empty
  it('FirstName - LastName Empty', () => {
    cy.get('#firstname').type('tinaa')
    cy.get('.save').click()
    cy.verifyErrorMessage('Last Name Empty')    
  })

  //if First Name Empty
  it('LastName - First Name Empty', () => { 
    cy.get('#lastname').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('First Name Empty')
  })

  it('Negatif - Company Empty', () => {
    cy.get('#company').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Company Empty, ')    
  })

  it('Negatif - Telephone Empty', () => { 
    cy.get('#telephone').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Phone Number Empty')
  })

  it('Negatif - Address Empty', () => { 
    cy.get('#street_1').type('Jakarta')
    cy.get('#street_2').type()
    cy.get('#street_3').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Address Empty')
  })

  it('Negatif - City Empty', () => { 
    cy.get('#city').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('City Empty')
  })

  it('Negatif - State Empty', () => { 
    cy.get('#region_id').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('State Empty')
  })

  it('Negatif - Postal Code Empty', () => { 
    cy.get('#zip').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Postal Code Empty')
  })

  it('Negatif - Country Empty', () => { 
    cy.get('#country').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Country Empty')
  })


})