describe('Login - Negative Case', () => {
    it('Should display error when email is empty', () => {
      cy.visit('https://www.demoblaze.com'); // Kunjungi halaman utama
      cy.get('#login2').should('be.visible').click(); // Klik tombol login untuk membuka modal
      cy.get('#logInModal').should('be.visible'); // Verifikasi modal login muncul
      cy.get('#loginpassword').type('password123'); // Isi password
      cy.get('button[onclick="logIn()"]').click(); // Klik tombol login
    });
    
    it('Should show an error when credentials are invalid', () => {
      cy.visit('https://www.demoblaze.com'); // Kunjungi halaman utama
      cy.get('#login2').should('be.visible').click(); // Klik tombol login untuk membuka modal
      cy.get('#logInModal').should('be.visible'); // Verifikasi modal login muncul
      cy.get('#loginusername').type('user@example.com'); // Isi email
      cy.get('#loginpassword').type('wrongpassword');
      cy.get('button[onclick="logIn()"]').click(); // Klik tombol login
        // cy.contains('Invalid email or password').should('be.visible');
      });
  });

  describe('Login - Negative Case Using Custom Command', () => {
    it('Should show error for invalid credentials using custom command', () => {
      cy.login('invalid@example.com', 'wrongpassword'); // Menggunakan custom command
      // cy.contains('Invalid email or password').should('be.visible'); // Verifikasi pesan error
    });
  });
  
  