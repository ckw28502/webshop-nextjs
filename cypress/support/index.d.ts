declare namespace Cypress {
    interface Chainable<Subject> {
      mockServerRequest(method: Method, url: string, status: number, body?: unknown): Chainable<Subject>;
	}
}