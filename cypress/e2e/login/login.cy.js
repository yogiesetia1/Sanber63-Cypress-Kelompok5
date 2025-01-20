import LoginPage from '../../pages/LoginPage';

describe('Pengujian Login Magento', () => {
  // Pengujian Menggunakan POM
  it('Login Berhasil (POM)', () => {
    LoginPage.visit();
    LoginPage.fillEmail('validemail@example.com');
    LoginPage.fillPassword('ValidPassword123');
    LoginPage.clickSignIn();
    cy.url().should('include', '/customer/account/');
  });

  it('Login Gagal dengan Kredensial Salah (POM)', () => {
    LoginPage.visit();
    LoginPage.fillEmail('invalidemail@example.com');
    LoginPage.fillPassword('InvalidPassword123');
    LoginPage.clickSignIn();
    LoginPage.verifyErrorMessage('The account sign-in was incorrect');
  });

  it('Login dengan Kolom Kosong', () => {
    LoginPage.visit();
    LoginPage.clickSignIn();
    LoginPage.verifyEmptyFieldError('email', 'This is a required field.');
    LoginPage.verifyEmptyFieldError('pass', 'This is a required field.');
  });

  // Pengujian Menggunakan Custom Command
  it('Login Berhasil (Custom Command)', () => {
    cy.login('validemail@example.com', 'ValidPassword123');
    cy.url().should('include', '/customer/account/');
  });

  it('Login dengan Kredensial Tidak Valid', () => {
    cy.login('invalidemail@example.com', 'InvalidPassword123');
    cy.get('.message-error').should('contain', 'The account sign-in was incorrect');
  });

  it('Login Gagal dengan Password Kosong (Custom Command)', () => {
    cy.login('validemail@example.com', '');
    cy.get('#pass-error').should('contain', 'This is a required field.');
  });

  it('Login Gagal dengan Email Kosong (Custom Command)', () => {
    cy.login('', 'ValidPassword123');
    cy.get('#email-error').should('contain', 'This is a required field.');
  });

  
});
