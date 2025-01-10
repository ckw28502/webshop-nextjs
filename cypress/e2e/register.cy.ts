/**
 * Tests for the Register page functionality, including form validations, server error handling, and successful submissions.
 * This suite covers edge cases and ensures the form behaves as expected under various scenarios.
 */

import { RegisterDto } from "@/dto/requests/registerDto";

describe('Register page test', () => {
  let request: RegisterDto;

  // Run before each test to visit the register page
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  // Load user fixture data before the suite begins
  before(() => {
    cy.fixture("users.json").then((data) => {
      request = data.user; // Assign user data from the fixture
    });
  });

  it('should show error messages when input is empty', () => {
    // Trigger validation by clicking the register button
    cy.get("#btn-register").click();

    // Verify error messages for required fields
    cy.get("p").contains("Username is required").should("exist");
    cy.get("p").contains("Email address is required").should("exist");
    cy.get("p").contains("Password is required").should("exist");
    cy.get("p").contains("Confirm password is required").should("exist");
  });

  // Test cases for invalid input values
  const invalidInputTestCases = [
    {
      title: "should show appropriate error message when username is less than 3 characters",
      id: "#register-username",
      value: "a",
      error: "Username must be at least 3 characters",
    },
    {
      title: "should show appropriate error message when username is longer than 50 characters",
      id: "#register-username",
      value: "irgbeobneorngokrnbkngownopntopnheropnorepnbptnbk berk prenbopernboperoperpnberonoerpgnoprnhperogorpgopernh",
      error: "Username cannot be more than 50 characters",
    },
    {
      title: "should show appropriate error message when email address is invalid",
      id: "#register-email",
      value: "a",
      error: "Email address is invalid",
    },
    {
      title: "should show appropriate error message when password does not contain uppercase letters",
      id: "#register-password",
      value: "a",
      error: "Password must contain at least one uppercase letter",
    },
    {
      title: "should show appropriate error message when password does not contain lowercase letters",
      id: "#register-password",
      value: "A",
      error: "Password must contain at least one lowercase letter",
    },
    {
      title: "should show appropriate error message when password does not contain numbers",
      id: "#register-password",
      value: "Aa",
      error: "Password must contain at least one number",
    },
    {
      title: "should show appropriate error message when password is less than 8 characters",
      id: "#register-password",
      value: "Aa1",
      error: "Password must be at least 8 characters",
    },
  ];

  // Iterate over invalid input test cases
  Cypress._.each(invalidInputTestCases, ({ title, id, value, error }) => {
    it(title, () => {
      const input = cy.get(id);
      input.type(value);
      input.blur(); // Trigger validation by blurring the input

      cy.get("p").contains(error).should("exist"); // Verify error message
    });
  });

  it('should show error message when passwords do not match', () => {
    // Enter mismatched passwords
    cy.get("#register-password").type("Pass1234");
    cy.get("#register-confirmation-password").type("a").blur();

    // Verify error message
    cy.get("p").contains("Passwords must match").should("exist");
  });

  // Helper function to fill and submit a valid registration form
  function validFormSubmission() {
    cy.get("#register-username").type(request.username);
    cy.get("#register-email").type(request.email);
    cy.get("#register-password").type(request.password);
    cy.get("#register-confirmation-password").type(request.password);

    cy.get("#btn-register").click();
  }

  // Test cases for server errors
  const serverErrors = [
    {
      title: "should toast error if username is already taken",
      serverError: "USERNAME_EXISTS",
      toastError: "Username is already taken",
    },
    {
      title: "should toast error if email is already taken",
      serverError: "EMAIL_EXISTS",
      toastError: "Email address is already taken",
    },
  ];

  // Iterate over server error test cases
  Cypress._.each(serverErrors, ({ title, serverError, toastError }) => {
    it(title, () => {
      // Mock server error response
      cy.mockServerRequest("POST", "/user", 400, serverError);

      validFormSubmission();

      // Verify toast error message
      cy.get("div").contains(toastError).should("exist");
    });
  });

  it('should toast success if server returns 201', () => {
    // Mock successful server response
    cy.mockServerRequest("POST", "/user", 201);

    validFormSubmission();

    // Verify success message
    cy.get("div").contains("Please check your email to confirm your registration").should("exist");
  });
});
