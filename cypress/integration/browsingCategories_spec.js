context('Browsing Categories Functionality', () => {
  beforeEach(() => {
    cy.loginAsNormalUser();
  });

  it.skip('should be able browse to women dresses category and display given dress information', () => {
    let dress = 'Printed Dress';

    // # Clicks womens link
    cy.get(".sf-with-ul").contains("Women").click();

    // # navigating to Dresses category
    cy.get("a.img[title='Dresses']").click();

    // # Making sure category disclairmer is present on the page
    cy.get("p").contains('Find your favorites dresses from our wide choice of evening, casual or summer dresses!').should('be.visible');

    // # selecting given dress from list
    cy.get("a.product-name").contains(dress).click();

    // # Making sure dress details information is present on the page
    // #table with information of the product is present
    cy.get("table.table-data-sheet").should('be.visible');
    // #sharing buttos are present
    cy.get("p.socialsharing_product").should('be.visible');
    // #add to car button is present on the page
    cy.get("p#add_to_cart").should('be.visible');
  });

  it('should be able to navigate to T-shirts Category', () => {
    let tshirt = 'Faded Short Sleeve T-shirts';

    // # Clicks T-shirts link
    cy.get("a[title='T-shirts']").contains("T-shirts").click({force: true});

    // # Making sure category disclairmer is present on the page
    cy.get("p").contains('The must have of your wardrobe, take a look at our different colors,').should('be.visible');
    cy.get("p").contains('shapes and style of our collection!').should('be.visible');

    // # selecting given shirt from list
    cy.get("a.product-name").contains(tshirt).click();

    // # Making sure dress details information is present on the page
    // #table with information of the product is present
    cy.get("table.table-data-sheet").should('be.visible');
    // #sharing buttos are present
    cy.get("p.socialsharing_product").should('be.visible');
    // #add to car button is present on the page
    cy.get("p#add_to_cart").should('be.visible');
  });
});