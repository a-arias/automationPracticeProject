
context('Account Creation Functionality', () => {
  beforeEach(() => {
    cy.loginAsNormalUser();
  });

  it('should be able to create a new user', () => {
    // # Fills Email information
    cy.get("#email").type("abram@targetable.com");

    // # Fills Password information
    cy.get("#passwd").type("nasadina2");
    
    // # Clicks login button
    cy.get("#SubmitLogin").click();

    // # Asserts dashboard is loading correctly
    cy.get("H1.page-heading").contains('My account');

  });
});