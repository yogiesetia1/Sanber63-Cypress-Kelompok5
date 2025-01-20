describe('template spec', () => {
  it('passes', () => {
    // Callback Base url 
    cy.visit('/')

  })
})
describe('Verify product can proceed to checkout', () => {
  it('passes', () => {
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
        cy.inputAddress(user.email, user.firtName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.phoneNumber)
    })
})
})