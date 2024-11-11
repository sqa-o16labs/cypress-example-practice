import { webSelectors } from "../support/selectors";

describe("Web Login with session management and fixtures", () => {
  it("Login with pre-defined user credentails", () => {
    cy.login("anas58@yopmail.com", "User@test123");
  });

  it.only("Login using fixture and sessions", () => {
    cy.fixture("users").then((user) => {
      cy.session("loginSession", () => {
        cy.login(user.email, user.password);
        cy.get('div[id="1"]', { timeout: 10000 }).should(
          "have.text",
          "Login successfully"
        );
      });
      cy.contains("Welcome");
      cy.checkDashboard();
    });
  });
});
