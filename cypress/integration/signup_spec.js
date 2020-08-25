
context('Account Creation Functionality', () => {
  beforeEach(() => {
    cy.navigateToDashboard();
  });

  it.skip('should be able to create a new user', () => {
    let randomNum = Math.floor(Math.random() * 999999) + 1;
    let email = `abram+${randomNum}@targetable.com`

    // # Fills Email information
    cy.get("#email_create").type(email);

    // # Clicks login button
    cy.get("#SubmitCreate").click();

    // # Filling required Personal information
    cy.get("#customer_firstname").type('Abrahammmm');

    cy.get("#customer_lastname").type('Ariassssss');

    // cy.get("#email").click().type(email);

    cy.get("#passwd").should('exist').type("myPassword123");

    //# Filling required Address information
    cy.get("#address1").type("1 main st");

    cy.get("#city").type("Redwood");

    cy.get('#uniform-id_state').select('California').should('have.value', '5')

    cy.get("#postcode").type("90001");

    cy.get('#id_country').select('United States').should('have.value', '21')

    cy.get("#phone_mobile").type("+526621496281");
    
    cy.get("#alias").clear().type("My Alias address");

    // # Filling required Address information
    cy.get("#submitAccount").click();

    cy.get("a.account").contains('Abraham Arias');

  });
});