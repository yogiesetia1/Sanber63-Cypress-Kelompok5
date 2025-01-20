describe('template spec', () => {
  beforeEach(() => {
    // Kunjungi halaman utama
    cy.visit('https://magento.softwaretestingboard.com/');

    // Pilih opsi ukuran
    cy.get('.swatch-opt-1556 > .size > .swatch-attribute-options > #option-label-size-143-item-166').click();

    // Pilih opsi warna
    cy.get('#option-label-color-93-item-50').click();

    // Hover ke produk pertama dan klik tombol Add to Cart
    cy.get('.product-items > :nth-child(1)')
      .scrollIntoView()
      .trigger('mouseover')
      .find('button[title="Add to Cart"]')
      .should('be.visible')
      .click({ force: true });

    // Kunjungi halaman shopping cart
    cy.visit('https://magento.softwaretestingboard.com/checkout/cart/');
  });

  it('Positif: Tambah kuantitas item dan verifikasi total harga', () => {

    cy.log('tes skenario positif');

    cy.get('body').then(($body) => {
      const quantity = 2; // Variabel kuantitas yang dicoba

      // Cari elemen input jumlah atau kuantitas
      if ($body.find('input[data-role="cart-item-qty"]').length > 0) {
        // Ambil elemen input kuantitas menggunakan atribut data-role
        cy.get('input[data-role="cart-item-qty"]')
          .clear()
          .type(quantity.toString()); // Isi dengan kuantitas baru

        // Klik tombol Update untuk menyimpan perubahan
        cy.get('.update').click();

        // tunggu untuk diupdate
        cy.wait(5000);

        // Verifikasi kuantitas barang
        cy.get('input[data-role="cart-item-qty"]').should('have.value', quantity.toString());

        // Verifikasi total harga
        cy.get('.col.price > .price-excluding-tax > .cart-price > .price').then(($unitPrice) => {
          const unitPrice = parseFloat($unitPrice.text().replace('$', '').trim());
          cy.log('Harga Satuan:', unitPrice);

          cy.get('strong > .price')
            .should('not.have.text', '0') // Pastikan harga sudah diperbarui
            .then(($totalPrice) => {
              const totalPrice = parseFloat($totalPrice.text().replace('$', '').trim());
              cy.log('Total Harga:', totalPrice);

              // Verifikasi total harga
              expect(totalPrice).to.equal(unitPrice * quantity);
            });
        });
      } else {
        cy.log('Elemen tidak ditemukan');
      }
    });
  });

  it('Negatif: Memasukkan Nilai Kuantitas Tidak Valid', () => {

    cy.log('tes skenario negatif');

    // Input nilai kuantitas tidak valid (angka negatif)
    cy.get('input[data-role="cart-item-qty"]')
      .clear()
      .type('-1'); // Masukkan angka negatif

    // Klik tombol Update
    cy.get('.update').click();

    // Tunggu pesan kesalahan muncul
    cy.wait(2000);

    // Verifikasi sistem menampilkan pesan kesalahan
    cy.get('.item-info > .col.qty')
    .should('contain', 'Please enter a number greater than 0 in this field');


    // Input nilai kuantitas tidak valid (0)
    cy.get('input[data-role="cart-item-qty"]')
      .clear()
      .type('0'); // Masukkan angka nol

    // Klik tombol Update
    cy.get('.update').click();

    // Tunggu pesan kesalahan muncul
    cy.wait(2000);

    // Verifikasi sistem menampilkan pesan kesalahan
    cy.get('.item-info > .col.qty')
    .should('contain', 'Please enter a number greater than 0 in this field');
    
    // Input nilai kuantitas tidak valid (huruf)
    cy.get('input[data-role="cart-item-qty"]')
      .clear()
      .type('e'); // Masukkan huruf

    // Klik tombol Update
    cy.get('.update').click();

    // Tunggu pesan kesalahan muncul
    cy.wait(2000);

    // Verifikasi sistem menampilkan pesan kesalahan
    cy.get('.item-info > .col.qty')
    .should('contain', 'This is a required field.');

  });
});
