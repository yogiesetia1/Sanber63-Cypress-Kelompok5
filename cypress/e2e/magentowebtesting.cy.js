describe('template spec', () => {
  it('passes', () => {
    // Callback Base url 
    cy.visit('/')

  })
})
describe('Verify product can proceed to checkout', () => {
  it('all field valid', () => {
      cy.visit('/')
      cy.xpath("//img[@alt='Radiant Tee']").click()
      cy.clickButton('#option-label-size-143-item-166')
      cy.clickButton('#option-label-color-93-item-50')
      cy.xpath("//span[.='Add to Cart']").click()
      cy.get('.showcart').should('contain','1').click()
      cy.xpath("//div[@class='amount price-container']//span[@class='price']").should('be.visible').get('#top-cart-btn-checkout').click()
      cy.get('#customer-email').should('be.visible')
      
      // Verifikasi aksi setelah klik
      cy.url().should('include', '/checkout/#shipping')

      cy.get('#customer-email').should('be.visible')
     
      // Muat data dari file fixture
      cy.fixture('userAddress.json').then((user) => {
          cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
      })

      cy.xpath("//input[@value='tablerate_bestway']").click()
      cy.xpath("//button[@class='button action continue primary']").click()

      // Verifikasi aksi setelah klik
      cy.url().should('include', '/checkout/#payment')
      cy.get('.billing-address-details').should('be.visible')
  })
  it('mandatory field only', () => {
    cy.visit('/')
    cy.xpath("//img[@alt='Radiant Tee']").click()
    cy.clickButton('#option-label-size-143-item-166')
    cy.clickButton('#option-label-color-93-item-50')
    cy.xpath("//span[.='Add to Cart']").click()
    cy.get('.showcart').should('contain','1').click()
    cy.xpath("//div[@class='amount price-container']//span[@class='price']").should('be.visible').get('#top-cart-btn-checkout').click()
    cy.get('#customer-email').should('be.visible')
    
    // Verifikasi aksi setelah klik
    cy.url().should('include', '/checkout/#shipping')

    cy.get('#customer-email').should('be.visible')
   
    // Muat data dari file fixture
    cy.fixture('userAddress.json').then((user) => {
        cy.inputAddress(user.email, user.firstName, user.lastName, '', user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
    })

    cy.xpath("//input[@value='tablerate_bestway']").click()
    cy.xpath("//button[@class='button action continue primary']").click()

    // Verifikasi aksi setelah klik
    cy.url().should('include', '/checkout/#payment')
    cy.get('.billing-address-details').should('be.visible')
})
})