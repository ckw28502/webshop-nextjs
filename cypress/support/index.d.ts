/**
 * Extends Cypress' Chainable interface to include the `mockServerRequest` command.
 * 
 * This declaration allows TypeScript to recognize the custom Cypress command
 * `mockServerRequest`, which is used to mock HTTP server requests during testing.
 *
 * @namespace Cypress
 * @interface Chainable
 * @method mockServerRequest
 */
declare namespace Cypress {
  interface Chainable<Subject> {
      /**
       * Mocks an HTTP server request and provides a custom response.
       *
       * @param {Method} method - The HTTP method for the request.
       * @param {string} url - The endpoint URL to intercept.
       * @param {number} status - The HTTP status code to return.
       * @param {unknown} [body] - The optional response body to return.
       * @returns {Chainable<Subject>} The Cypress Chainable object.
       */
      mockServerRequest(method: Method, url: string, status: number, body?: unknown): Chainable<Subject>;
  }
}
