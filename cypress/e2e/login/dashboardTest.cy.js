const dashboardPage = require('../../pageObjects/dashboardPage');

describe('Dashboard - Basic Functionality', () => {
  it('Should display welcome message and user profile', () => {
    // Asumsikan pengguna sudah login
    cy.visit('/https://www.demoblaze.com/d'); // Akses halaman dashboard

    // Verifikasi elemen di dashboard menggunakan POM
    dashboardPage.verifyWelcomeMessage('Welcome, User'); // Verifikasi pesan selamat datang
    dashboardPage.verifyUserProfileVisible();            // Verifikasi profil pengguna terlihat
  });

  it('Should allow the user to log out', () => {
    // Asumsikan pengguna sudah login
    cy.visit('https://www.demoblaze.com/'); // Akses halaman dashboard

    // Lakukan logout menggunakan POM
    dashboardPage.logout();

    // Verifikasi pengguna diarahkan kembali ke halaman login
    cy.url().should('include', '#login2');
  });
});
