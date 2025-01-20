describe('Login - Positive Case', () => {
    it('Should login successfully with valid credentials', () => {
      cy.visit('https://www.demoblaze.com'); // Kunjungi halaman utama
      cy.get('#login2').should('be.visible').click(); // Klik tombol login untuk membuka modal
      cy.get('#logInModal').should('be.visible'); // Verifikasi modal login muncul
      cy.get('#loginusername').type('user@example.com'); // Isi email
      cy.get('#loginpassword').type('password123'); // Isi password
      cy.get('button[onclick="logIn()"]').click(); // Klik tombol login
      cy.url().should('include', 'https://www.demoblaze.com/'); // Verifikasi URL
    });
  });

  describe('Login - Positive Case Using Custom Command', () => {
    it('Should login successfully using custom command', () => {
      cy.login('user@example.com', 'password123'); // Menggunakan custom command
      cy.url().should('include', 'https://www.demoblaze.com/'); // Verifikasi URL setelah login
    });
  });
  
  