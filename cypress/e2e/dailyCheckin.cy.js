import { webSelectors } from "../support/selectors.js";

describe("Do daily checkin", () => {
  before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit(Cypress.env("baseUrlWeb"));
  });

  it("Login into user account", () => {
    cy.fixture("users").then((user) => {
      cy.login(user.email, user.password);
    });
  });

  it("Verify url is correct", () => {
    cy.url().should("eq", Cypress.env("baseUrlWeb") + "dashboard");
  });

  it("Validates the check in popup", () => {
    cy.wait(3000);
    //cy.get(webSelectors.checkInPopUp).should("be.visible");
    cy.get("#headlessui-dialog-panel-\\:rd\\:");
    cy.get(dailyCheckinOptionThree) // Use the alt attribute as a selector
      .trigger("mouseover")
      .click();
    cy.get("button.bg-primary").contains("Next").click({ force: true });
    cy.get(dailyCheckinOptionThree).trigger("mouseover").click();
    cy.get(".bg-custom-gradient1").click();
    cy.get(dailyCheckinOptionThree).trigger("mouseover").click();
    cy.get(".bg-custom-gradient1").click();
  });
});
