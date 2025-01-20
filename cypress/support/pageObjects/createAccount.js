class createAccount {
    //Click "Create an Account" link navigation in the header
    NavigatetoCreateAccount(){
        cy.get('.panel > .header > :nth-child(3) > a').click()
    }

    //=== INPUT FIRSTNAME AND LASTNAME ===//
    //input first name
    fillFirstName(firstName){
        cy.get('#firstname').type(firstName)
    }
    //input last name
    fillLastName(lastName){
        cy.get('#lastname').type(lastName)
    }

    //==== INPUT EMAIL ====//
    //input email
    fillEmail(email){
        cy.get('#email_address').type(email)
    }

    //==== INPUT PASSWORD ====//
    //input password
    fillPassword(password){
        cy.get('#password').type(password)
    }
    //input confirm password
    fillConfirmPassword(confirmPassword){
        cy.get('#password-confirmation').type(confirmPassword)
    }

    //==== BUTTON FORM ====//
    //submit form
    submitForm(){
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    }

    //==== VERIFY MESSAGE ====//
    //success registration message
    verifySuccessMessage(){
        cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
    }
    //error message
    verifyErrorMessage(message){
        cy.contains(message).should('be.visible')
    }
    // Password Validation and Strength Test
    validatePasswordStrength(strength) {
        cy.contains(`Password Strength: ${strength}`).should('be.visible');
    }
}

export default new createAccount;
