describe('Edit Address', () => {
  beforeEach(() => {
    cy.visit('')
    
  })

  // Positif Case - Success Edit Address
  it('Positif - Success Changes Address', () => {
    cy.ChangesAddress('tina', 'oktapiani', 'PT.ABC', '082113456789', 'Jakarta', '', '', 'Jakarta Barat', 'DKI Jakarta', '11220', 'Indonesia')
    cy.get('[data-test="title"').should('contain.text', 'Success Update Address' )
  })

  // Negatif Case - if Last name Empty
  it('FirstName - LastName Empty', () => {
    cy.get('#firstname').type('tinaa')
    cy.get('.save').click()
    cy.verifyErrorMessage('Last Name Empty')    
  })

  // Negatif Case - if First name Empty
  it('LastName - First Name Empty', () => { 
    cy.get('#lastname').type('oktapiani')
    cy.get('.save').click()
    cy.verifyErrorMessage('First Name Empty')
  })

  // Negatif Case - if Company Empty
  it('Negatif - Company Empty', () => {
    cy.get('#company').type('PT.ABC')
    cy.get('.save').click()
    cy.verifyErrorMessage('Company Empty, ')    
  })

  // Negatif Case - if Telepon Empty
  it('Negatif - Telephone Empty', () => { 
    cy.get('#telephone').type('082321900555')
    cy.get('.save').click()
    cy.verifyErrorMessage('Phone Number Empty')
  })

  // Negatif Case - if Address Empty
  it('Negatif - Address Empty', () => { 
    cy.get('#street_1').type('Jakarta')
    cy.get('#street_2').type()
    cy.get('#street_3').type()
    cy.get('.save').click()
    cy.verifyErrorMessage('Address Empty')
  })

  // Negatif Case - if City Empty
  it('Negatif - City Empty', () => { 
    cy.get('#city').type('Jakarta Barat')
    cy.get('.save').click()
    cy.verifyErrorMessage('City Empty')
  })

  // Negatif Case - if State Empty
  it('Negatif - State Empty', () => { 
    cy.get('#region_id').select('DKI Jakarta')
    cy.get('.save').click()
    cy.verifyErrorMessage('State Empty')
  })

  // Negatif Case - if Postal COde Empty
  it('Negatif - Postal Code Empty', () => { 
    cy.get('#zip').type('11220')
    cy.get('.save').click()
    cy.verifyErrorMessage('Postal Code Empty')
  })

  // Negatif Case - if Country Empty
  it('Negatif - Country Empty', () => { 
    cy.get('#country').select('Indonesian')
    cy.get('.save').click()
    cy.verifyErrorMessage('Country Empty')
  })


})