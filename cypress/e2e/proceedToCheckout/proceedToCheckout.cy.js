describe('Verify product can proceed to checkout', () => {
    it('all field valid', () => {
        // add product to cart to checkout
        cy.addProduct()
        
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
        cy.addProduct()
        
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
describe('Verify shipping process failed - negative case', () => {
    it('empty mandatory field', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, '', user.company, '', '', user.state, user.zipCode, user.country, user.phoneNumber)
        })

        // Shipping method
        cy.xpath("//input[@value='tablerate_bestway']").click()
        // Next button click handler
        cy.xpath("//button[@class='button action continue primary']").click()

        // verifikasi muncul peringatan error
        cy.contains('This is a required field').should('be.visible');

    })
    it('invalid email address format input', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress('dycakyrodmailinator.com', user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify error message invalid email format appear
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible');
    })
    it('invalid name input contain number', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, 'Tatyana12', 'Fletcher12', user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Name input cannot contain number').should('be.visible');
    })
    it('invalid name input contain symbol', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, 'Tatyana@@', 'Fletcher@@', user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Name input cannot contain symbol').should('be.visible');
    })
    it('invalid postal code / zip contain alphabet', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, '90001A', user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Zip code input cannot contain alphabet').should('be.visible');

    })
    it('invalid postal code / zip contain symbol', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, '90001@', user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Zip code input cannot contain symbol').should('be.visible');

    })
    it('invalid phone number contain alphabet', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, '+1 (789) 355-4609AB')
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Phone number cannot contain alphabet').should('be.visible');

    })
    it('invalid phone number input less than 7', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, '+1 (789) 35')
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Phone number must have 7 - 13 digit number').should('be.visible');

    })
    it('invalid phone number more than 15 digit', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, '+1 (789) 355-460934567')
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Phone number must have 7 - 13 digit numbers').should('be.visible');

    })
    it('missmatch between country and city', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, 'Sedona', 'California', user.zipCode, user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Invalid state for selected country').should('be.visible');

    })
    it('exceed field length limit 10 digit zip code ', () => {
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, '90001876543', user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Invalid input max 10 digit').should('be.visible');

    })
    it('injection attack to street address field', () => {
        // add product to cart to checkout
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, '<script>alert("hack")</script>', user.city, user.state, user.zipCode, user.country, user.phoneNumber)
        })

        cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('Invalid input').should('be.visible');

    })
    it('empty shipping method negative testing', () => {
        // add product to cart to checkout
        cy.addProduct()
        
        // Verifikasi aksi setelah klik
        cy.url().should('include', '/checkout/#shipping')

        cy.get('#customer-email').should('be.visible')
       
        // Muat data dari file fixture
        cy.fixture('userAddress.json').then((user) => {
            cy.inputAddress(user.email, user.firstName, user.lastName, user.company, user.streetAddress, user.city, user.state, user.zipCode, user.country, user.phoneNumber)
        })

        // cy.xpath("//input[@value='tablerate_bestway']").click()
        cy.xpath("//button[@class='button action continue primary']").click()

        // verify warning error show
        cy.contains('The shipping method is missing. Select the shipping method and try again.').should('be.visible');

    })
    it('Edit ship to address and confirm success checkout - positive case', () => {
        // add product to cart to checkout
        cy.addProduct()
        
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

        // edit ship to address
        cy.xpath("//div[@class='ship-to']//button[@class='action action-edit']").click()
        cy.xpath("//div[@name='shippingAddress.firstname']//input[@name='firstname']").type(' alia')
        cy.xpath("//button[@class='button action continue primary']").click()

        // verifikasi keberhasilan hasil update
        cy.xpath("//div[@class='ship-to']/div[@class='shipping-information-content']").should('be.visible')
        .contains('Tatyana alia')
        cy.xpath("//span[.='Place Order']").click()

        // verify success order
        cy.url().should('include', '/checkout/onepage/success/')
        cy.contains('Thank you for your purchase!').should('be.visible')

    })
    it('Edit ship method and confirm success checkout - Positive case', () => {
        // add product to cart to checkout
        cy.addProduct()
        
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

        // edit ship to address
        cy.xpath("//div[@class='ship-via']//button[@class='action action-edit']").click()
        cy.clickButton('.opc-block-shipping-information')
        cy.xpath("//button[@class='button action continue primary']").click()

        // verifikasi keberhasilan hasil update
        cy.xpath("//div[@class='ship-via']//span[@class='value']").should('be.visible')
        .contains('Flat Rate-Fixed')

        // verify success order
        cy.url().should('include', '/checkout/onepage/success/')
        cy.contains('Thank you for your purchase!').should('be.visible')
    })
  })