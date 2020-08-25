// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('navigateToDashboard', () => {
  // # Get all parameters from auth0
  cy.visit('/');
  // # Wait to page to load
  cy.get(".login").should('exist').click();
});

Cypress.Commands.add('loginAsNormalUser', () => {
  // # Get all parameters from auth0
  cy.visit('/');
  // # Wait to page to load
  cy.get(".login").should('exist').click();

  // # Fills Email information
  cy.get("#email").type("abram@targetable.com");

  // # Fills Password information
  cy.get("#passwd").type("nasadina2");
  
  // # Clicks login button
  cy.get("#SubmitLogin").click();

  // # Asserts dashboard is loading correctly
  cy.get("H1.page-heading").contains('My account');
});

// #This command is going to perform all clicks to checkout a product following the happy path
Cypress.Commands.add('clickCheckoutAllsectionsButtons', () => {
    //# confirm and continue to first checkout section
    cy.get("a").contains("Proceed to checkout").click();

    //# click checkout summary button
    cy.get('p.cart_navigation').within(() => {
      cy.get("a[title='Proceed to checkout']").click();
    });
      
    //# click proceed to checkout address button
    cy.get("button[name='processAddress']").click();

    //# Accepting terms and conditions
    cy.get("#uniform-cgv").click();
      
    //# click proceed to checkout shipping button 
    cy.get("button[name='processCarrier']").click();
});