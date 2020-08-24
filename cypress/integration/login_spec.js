
context('login functionality', () => {
  beforeEach(() => {
    cy.navigateToDashboard();
  });

  it('should be able to login using normal user', () => {
    // # Fills Email information
    cy.get("#email").type("abram@targetable.com");

    // # Fills Password information
    cy.get("#passwd").type("nasadina2");
    
    // # Clicks login button
    cy.get("#SubmitLogin").click();

    // # Asserts dashboard is loading correctly
    cy.get("H1.page-heading").contains('My account');

  });

  it('should Not be able to login using wrong credentials', () => {
    // # Fills Email information
    cy.get("#email").type("abram@targetable.com");

    // # Fills Password information
    cy.get("#passwd").type("incorrect password");
    
    // # Clicks login button
    cy.get("#SubmitLogin").click();

    // # Asserts dashboard is loading correctly
    cy.get("div.alert-danger").contains('There is 1 error');

  });
});