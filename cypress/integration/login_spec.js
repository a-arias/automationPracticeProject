
context('login functionality', () => {
  beforeEach(() => {
    cy.navigateToDashboard();
  });

  it('should be able to login using normal user', () => {
    // # Fills Email information
    cy.get("#email").type(Cypress.env('email'));

    // # Fills Password information
    cy.get("#passwd").type(Cypress.env('pass'));
    
    // # Clicks login button
    cy.get("#SubmitLogin").click();

    // # Asserts dashboard is loading correctly
    cy.get("H1.page-heading").contains('My account').should('be.visible');

  });

  it('should Not be able to login using wrong credentials', () => {
    // # Fills Email information
    cy.get("#email").type(Cypress.env('email'));

    // # Fills Password information
    cy.get("#passwd").type("incorrect password");
    
    // # Clicks login button
    cy.get("#SubmitLogin").click();

    // # Asserts dashboard is loading correctly
    cy.get("div.alert-danger").contains('There is 1 error').should('be.visible');

  });
});