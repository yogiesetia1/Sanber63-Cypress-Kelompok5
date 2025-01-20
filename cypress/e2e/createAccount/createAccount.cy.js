import createAccount from "../../support/pageObjects/createAccount";

describe('Create an Account Functionality - [RakhmaYuliA] ', () => {

    // Function create random email
    function randomEmail() {
    const randomString = Math.random().toString(36).substring(2, 9)
    const email = randomString + "@mailinator.com"
    return email
    }
    
    beforeEach(() => {
      cy.visit('')
      createAccount.NavigatetoCreateAccount()
      
      // Load data  fixture
      cy.fixture('dataAccount.json').then((data) => {
      dataAccount = data;
      });
        });
      let dataAccount
    
    // POSITIVE TEST : CREATE AN ACCOUNT SUCCESS
    it('Create an Account successfully', () => {
        let useremail = randomEmail()
        createAccount.fillFirstName(dataAccount.validUser.firstName)
        createAccount.fillLastName(dataAccount.validUser.lastName)
        createAccount.fillEmail(useremail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifySuccessMessage()
      })
    it('Create an Account Successfully with alphabet and number', () => {
        let useremail = randomEmail()
        createAccount.fillFirstName(dataAccount.validUser.firstNameMix)
        createAccount.fillLastName(dataAccount.validUser.lastNameMix)
        createAccount.fillEmail(useremail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifySuccessMessage()
      })

    //  PASSWORD VALIDATION AND STRENGTH 
    it('Validate weak password strength', () => {
      createAccount.fillPassword(dataAccount.passwordUser.weak)
      createAccount.validatePasswordStrength(dataAccount.passwordStrength.weak)
    })
    it('Validate medium password strength', () => {
      createAccount.fillPassword(dataAccount.passwordUser.medium)
      createAccount.validatePasswordStrength(dataAccount.passwordStrength.medium)
    })
    it('Validate strong password strength', () => {
      createAccount.fillPassword(dataAccount.passwordUser.strong)
      createAccount.validatePasswordStrength(dataAccount.passwordStrength.strong)
    })
    it('Validate very strong password strength', () => {
      createAccount.fillPassword(dataAccount.passwordUser.veryStrong)
      createAccount.validatePasswordStrength(dataAccount.passwordStrength.veryStrong)
    })
    
    // NEGATIVE TEST 
    // NEGATIVE TEST : EMPTY INPUT FIELD
    it('Create an Account failed with empty input field', () => {
        createAccount.submitForm()
        createAccount.verifyErrorMessage('This is a required field.')
      })

    // NEGATIVE TEST : FIRST NAME AND LAST NAME INVALID
    it('Create an account failed with first name have Character', ()=>{
        let useremail = randomEmail()
        createAccount.fillFirstName(dataAccount.invalidUser.firstNameMiss)
        createAccount.fillLastName(dataAccount.validUser.lastName)
        createAccount.fillEmail(useremail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifyErrorMessage('First Name is not valid!')
      })
    it('Create an account failed with last name have Character', ()=>{
        let useremail = randomEmail()
        createAccount.fillFirstName(dataAccount.validUser.firstName)
        createAccount.fillLastName(dataAccount.invalidUser.lastNameMiss)
        createAccount.fillEmail(useremail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifyErrorMessage('Last Name is not valid!')
      })
    it('Create an account failed with first name and last name have Character', ()=>{
        let useremail = randomEmail()
        createAccount.fillFirstName(dataAccount.invalidUser.firstNameMiss)
        createAccount.fillLastName(dataAccount.invalidUser.lastNameMiss)
        createAccount.fillEmail(useremail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifyErrorMessage('First Name is not valid! Last Name is not valid!')
      })

    // NEGATIVE TEST : FAILED EMAIL ADDRESS
    it('Create an account failed with invalid email address', ()=>{
        createAccount.fillFirstName(dataAccount.validUser.firstName)
        createAccount.fillLastName(dataAccount.validUser.lastName)
        createAccount.fillEmail(dataAccount.invalidUser.invalidEmail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifyErrorMessage('Please enter a valid email address (Ex: johndoe@domain.com).')
      })
    it('Create an account failed with already email address', ()=>{
      createAccount.fillFirstName(dataAccount.validUser.firstName)
        createAccount.fillLastName(dataAccount.validUser.lastName)
        createAccount.fillEmail(dataAccount.invalidUser.existingEmail)
        createAccount.fillPassword(dataAccount.validUser.password)
        createAccount.fillConfirmPassword(dataAccount.validUser.confirmPassword)
        createAccount.submitForm()
        createAccount.verifyErrorMessage('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
      })

      // NEGATIVE TEST : FAILED PASSWORD
      it('Create an account failed with short password', ()=>{
          let useremail = randomEmail()
          createAccount.fillFirstName(dataAccount.validUser.firstName)
          createAccount.fillLastName(dataAccount.validUser.lastName)
          createAccount.fillEmail(useremail)
          createAccount.fillPassword(dataAccount.invalidPassword.shortPassword)
          createAccount.fillConfirmPassword(dataAccount.invalidPassword.shortPassword)
          createAccount.submitForm()
          createAccount.verifyErrorMessage('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
        })
        it('Create an account failed with missing Special Char password', ()=>{
          let useremail = randomEmail()
          createAccount.fillFirstName(dataAccount.validUser.firstName)
          createAccount.fillLastName(dataAccount.validUser.lastName)
          createAccount.fillEmail(useremail)
          createAccount.fillPassword(dataAccount.invalidPassword.missingSpecialChar)
          createAccount.fillConfirmPassword(dataAccount.invalidPassword.missingSpecialChar)
          createAccount.submitForm()
          createAccount.verifyErrorMessage('Minimum of different classes of characters in password is 3.')
        })
        it('Create an account failed with different value password', ()=>{
          let useremail = randomEmail()
          createAccount.fillFirstName(dataAccount.validUser.firstName)
          createAccount.fillLastName(dataAccount.validUser.lastName)
          createAccount.fillEmail(useremail)
          createAccount.fillPassword(dataAccount.validUser.password)
          createAccount.fillConfirmPassword(dataAccount.passwordUser.strong)
          createAccount.submitForm()
          createAccount.verifyErrorMessage("Please enter the same value again.")
        })
})
