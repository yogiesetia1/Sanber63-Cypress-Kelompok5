
describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/customer/account/login/');
  });

  it('TC-01: Successful Login', () => {
    cy.login('valid.email@example.com', 'validPassword123'); // Custom command digunakan.
    cy.url().should('include', '/customer/account/');
  });
});

// Import test data dari fixtures
const testData = require('../fixtures/test-data.json');

describe('Login Feature', () => {
// Jalankan ini sebelum setiap test case
beforeEach(() => {
  // Buka halaman login
  cy.visit('/customer/account/login/');
});

it('TC-01: Successful Login', () => {
  // Gunakan custom command login dengan test data
  cy.login(testData.validEmail, testData.validPassword);
  
  // Verifikasi URL setelah login berhasil
  cy.url().should('include', '/customer/account/');
});

it('TC-02: Failed Login - Invalid Password', () => {
  // Gunakan custom command login dengan password salah
  cy.login(testData.validEmail, testData.invalidPassword);

  // Verifikasi pesan error muncul
  cy.get('.error-msg').should('contain', 'Invalid login or password.');
});
});
