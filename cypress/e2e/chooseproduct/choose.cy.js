import homePage from "../support/pageObjects/homePage"
import productDetailPage from "../support/pageObjects/productDetailPage"
describe('Add to Cart from Product Detail Page', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/olivia-1-4-zip-light-jacket.html');
  });
  it('should successfully add the product to the cart when valid options are selected', () => {
    // Pilih ukuran
    cy.get('div[option-label="M"]').click(); 
    // Pilih warna
    cy.get('div[option-label="Blue"]').click(); 
    // Masukkan jumlah (opsional, default 1)
    cy.get('#qty').clear().type('2'); // diganti jumlah menjadi 2
    // Klik tombol Add to Cart
    cy.get('button[title="Add to Cart"]').click();
    // Validasi bahwa produk berhasil ditambahkan ke keranjang
    cy.get('.message-success').should('be.visible').and('contain', 'You added Olivia 1/4 Zip Light Jacket to your shopping cart.');
  });
  it('should show an error if size is not selected', () => {
    // Pilih warna
    cy.get('div[option-label="Blue"]').click(); // Pilih warna biru
    // Klik tombol Add to Cart tanpa memilih ukuran
    cy.get('button[title="Add to Cart"]').click();
    // Validasi pesan error
    cy.get('.mage-error').should('be.visible').and('contain', 'This is a required field.');
  });
  it('should show an error if color is not selected', () => {
    // Pilih ukuran
    cy.get('div[option-label="M"]').click(); 
    // Klik tombol Add to Cart tanpa memilih warna
    cy.get('button[title="Add to Cart"]').click();
    // Validasi pesan error
    cy.get('.mage-error').should('be.visible').and('contain', 'This is a required field.');
  });
});

