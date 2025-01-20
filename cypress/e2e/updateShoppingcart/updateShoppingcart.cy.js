describe('template spec', () => {
  it('Positif: Tambah kuantitas item dan verifikasi total harga', () => {
    
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
    
    
  })
})