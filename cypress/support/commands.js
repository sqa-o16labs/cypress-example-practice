import { loginSelectors, webSelectors } from "./selectors.js";

Cypress.Commands.add("login", (email, password) => {
  cy.get(loginSelectors.usernameInput).type(email);
  cy.get(loginSelectors.passwordInput).type(password);
  cy.get(loginSelectors.submitButton).click();
});

Cypress.Commands.add("checkDashboard", () => {
  //cy.get(webSelectors.notifcationIcon).should('be.visible');
  //cy.get(webSelectors.profileImage).should('be.visible');
});
