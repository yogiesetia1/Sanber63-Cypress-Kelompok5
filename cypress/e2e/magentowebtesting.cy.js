describe('template spec', () => {
  it('passes', () => {
    // Callback Base url 
    cy.visit('/')

    

    // Proceed to Checkout section [Yogi]
    cy.visit('/checkout/#shipping')

  })
})