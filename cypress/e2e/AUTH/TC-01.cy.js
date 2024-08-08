describe("Login with valid credentials", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Check title of page", () => {
    cy.title().should("eq", "AlignerAi Admin");
  });

  it("Sign In", () => {
    cy.get('[type="email"]').type(Cypress.env("adminUsername"));
    cy.get('[type="password"]').type(Cypress.env("adminPasword"), {
      log: false,
    });
    cy.contains("Login").should("be.visible").click();
    cy.contains("Dashboard").should("be.visible");
  });
});
