/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

/**
 * Custom Cypress command to mock server requests.
 * This command intercepts HTTP requests made to the server and responds with the provided status code and response body.
 * 
 * @param {string} method - The HTTP method (e.g., GET, POST, PUT, DELETE).
 * @param {string} url - The endpoint URL to intercept (relative to the base API URL).
 * @param {number} status - The HTTP status code to respond with.
 * @param {object|null} [body=null] - The response body to send back (optional).
 * 
 * @example
 * // Mock a GET request to "/users" with a 200 status and a mock response body
 * cy.mockServerRequest('GET', '/users', 200, { users: [] });
 */
Cypress.Commands.add("mockServerRequest", (method, url, status, body = null) => {
    cy.intercept(method, Cypress.env("API_URL") + url, (req) => {
        req.reply({
            statusCode: status,
            body: body
        });
    });
});
