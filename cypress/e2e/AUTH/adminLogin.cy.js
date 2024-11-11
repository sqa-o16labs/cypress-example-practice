describe("Admin Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrlAdmin"));
  });

  it("Verify title of page", () => {
    // cy.title().should('equal', "myselfsquared | Admin");
    cy.location('pathname').should('equal','/login');
  });

  it("Verify login with valid credentials", () => {
    cy.get('[name="email"]').type(Cypress.env("adminUsername"));
    cy.get('[name="password"]').type(Cypress.env("adminPasword"), {
      log: false,
    });
    cy.get('[type="submit"]').should("be.visible").click();
   cy.contains("Logout").scrollIntoView({top: -100}).should("be.visible");
  });
});


 