context('Checkout Functionality', () => {
  beforeEach(() => {
    cy.loginAsNormalUser();
  });

  it('should be able to buy a new woman given dress', () => {
    let dress = 'Printed Summer Dress'

    // # Clicks womens link
    cy.get(".sf-with-ul").contains("Women").click();

    //# searching for given dress to buy
    cy.get("a.product-name").contains(dress).click();
    
    //# adding item to the cart
    cy.get("#add_to_cart").click();

    //# clicking all checkout buttons 
    cy.clickCheckoutAllsectionsButtons();

    //# Click pay using Check
    cy.get("a[title='Pay by check.']").click();

    //# Click confirm order button
    cy.get("button[type='submit']").contains('I confirm my order').click();

    //# Assert the order was successfully made
    cy.get("p.alert-success").contains('Your order on My Store is complete.').should('be.visible');
  });
});