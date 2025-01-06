import { RegisterDto } from "@/dto/requests/registerDto";

describe('Register page test', () => {
  let request: RegisterDto;

  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  before(() => {
    cy.fixture("users.json").then((data) => {
      request = data.user;
    })
  });

  it('should show error messages when input is empty', () => {
    cy.get("#btn-register").click();

    cy.get("p").contains("Username is required").should("exist");
    cy.get("p").contains("Password is required").should("exist");
    cy.get("p").contains("Confirm password is required").should("exist");
  });

  const invalidInputTestCases = [
    {
      title: "should show appropriate error message when username is less than 3 characters",
      id: "#register-username", 
      value: "a", 
      error: "Username must be at least 3 characters"
    },
    {
      title: "should show appropriate error message when username is longer than 50 characters",
      id: "#register-username", 
      value: "irgbeobneorngokrnbkngownopntopnheropnorepnbptnbk berk prenbopernboperoperpnberonoerpgnoprnhperogorpgopernh", 
      error: "Username cannot be more than 50 characters"
    },
    {
      title: "should show appropriate error message when password does not contains uppercase letter",
      id: "#register-password", 
      value: "a", 
      error: "Password must contain at least one uppercase letter"
    },
    {
      title: "should show appropriate error message when password does not contains lowercase letter",
      id: "#register-password", 
      value: "A", 
      error: "Password must contain at least one lowercase letter"
    },
    {
      title: "should show appropriate error message when password does not contains number",
      id: "#register-password", 
      value: "Aa", 
      error: "Password must contain at least one number"
    },
    {
      title: "should show appropriate error message when password is less than 8 characters",
      id: "#register-password", 
      value: "Aa1", 
      error: "Password must be at least 8 characters"
    }
  ]

  Cypress._.each(invalidInputTestCases, ({ title, id, value, error }) => {
    it(title, () => {
      const input = cy.get(id);
      input.type(value);
      input.blur();

      cy.get("p").contains(error).should("exist");
    });
  });

  it('should show error message when passwords do not match', () => {
    cy.get("#register-password").type("Pass1234");
    
    cy.get("#register-confirmation-password").type("a").blur();

    cy.get("p").contains("Passwords must match").should("exist");
  });

  function validFormSubmission() {
    cy.get("#register-username").type(request.username);
    cy.get("#register-password").type(request.password);
    cy.get("#register-confirmation-password").type(request.password);
    
    cy.get("#btn-register").click();
  }

  it('should toast error if server returns error', () => {
    cy.mockServerRequest("POST", "/user", 400, "USER_USERNAME_EXISTS");

    validFormSubmission();

    cy.get("div").contains("Username is already taken").should("exist");
  });

  it('should toast success if server returns 201', () => {
    cy.mockServerRequest("POST", "/user", 201);

    validFormSubmission();

    cy.get("div").contains("User registered successfully").should("exist");
  });
});