import LoginPage from '../../pages/LoginPage';

describe('Pengujian Lupa Password', () => {
  beforeEach(() => {
    LoginPage.visit(); // Navigasi ke halaman login sebelum setiap pengujian
  });

  it('Harus menavigasi ke halaman Lupa Password', () => {
    // Navigasi ke halaman Lupa Password dan verifikasi URL
    LoginPage.visitForgotPassword();
    cy.url().should('include', '/customer/account/forgotpassword/');
  });
});
