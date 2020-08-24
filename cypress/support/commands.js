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
  cy.visit('http://automationpractice.com/');
  // # Wait to page to load
  cy.get(".login").should('exist').click();
});

Cypress.Commands.add('loginAsNormalUser', () => {
  // # Get all parameters from auth0
  cy.visit('http://automationpractice.com/');
  // # Wait to page to load
  cy.get(".login").should('exist').click();

  // # Fills Email information
  cy.get("#email").type("abram@example.com");

  // # Fills Password information
  cy.get("#passwd").type("password");
  
  // # Clicks login button
  cy.get("#SubmitLogin").click();

  // # Asserts dashboard is loading correctly
  cy.get("H1.page-heading").contains('My account');
});