class LoginPage {
  static visit() {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  }

 static visitForgotPassword() {
  cy.get('a[href="https://magento.softwaretestingboard.com/customer/account/forgotpassword/"]')
    .should('be.visible') // Verifikasi link terlihat
    .click(); // Klik link untuk navigasi
}


  static fillEmail(email) {
    if (email) {
      cy.get('#email').type(email); // Pastikan selector sesuai
    } else {
        cy.log('Email kosong, tidak mengetik');
    }
  }

  static fillPassword(password) {
    if (password) {
      cy.get('#pass').type(password); // Pastikan selector sesuai
    } else {
        cy.log('Password kosong, tidak mengetik');
    }
  }

  static clickSignIn() {
    cy.get('#send2').click();
  }

  static verifyErrorMessage(expectedMessage) {
    cy.get('.message-error.error.message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', expectedMessage);
}


    static verifyEmptyFieldError(field, message) {
      cy.get(`#${field}-error`, { timeout: 10000 }) // Berikan timeout yang lebih panjang
        .should('exist') // Pastikan elemen ada
        .and('be.visible') // Pastikan elemen terlihat
        .and('contain.text', message); // Pastikan teks sesuai
    }
    

  static fillForgotPasswordEmail(email) {
    cy.get('#email_address').type(email);
  }

  static submitForgotPassword() {
    cy.get('button[title="Reset My Password"]').click();
  }
}

export default LoginPage;
