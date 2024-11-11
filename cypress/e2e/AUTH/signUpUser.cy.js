import { faker } from "@faker-js/faker";

describe("Sign up a user account", () => {
  before(() => {
    cy.visit(Cypress.env("baseUrlWeb"));
  });

  it("Navigates to Sign Up", () => {
    cy.contains("Sign up").should("be.visible").click();
    cy.url().should("eq", Cypress.env("baseUrlWeb") + "sign-up");
  });

  it("Check if the page loads", () => {
    cy.contains("Create Your Account").should("be.visible");
  });

  it("Validate the sign up form", () => {
    let firstName = faker.person.firstName();
    let lastName = "cypress";
    let nickName = firstName.toLowerCase() + "." + lastName;
    let emailAddress = firstName.toLowerCase() + "99@yopmail.com";
    let phoneNumber = Math.floor(
      1000000000 + Math.random() * 9000000000
    ).toString();
    let setPassword = "User@test123";
    cy.get('input[name="firstName"]')
      .should("be.empty")
      .type(firstName, { delay: 0.1 });
    cy.get('input[name="lastName"]')
      .should("be.empty")
      .type(lastName, { delay: 0.1 });
    cy.get('input[name="nickName"]')
      .should("be.empty")
      .type(nickName, { delay: 0.1 });
    cy.get('input[name="email"]')
      .should("be.empty")
      .type(emailAddress, { delay: 0.1 });
    cy.get('input[name="phoneNumber"]')
      .should("be.empty")
      .type(phoneNumber, { delay: 0.1 });
    cy
      .get('input[name="confirmPassword"]')
      .should("be.empty")
      .type(setPassword),
      { delay: 0.1 };
    cy.get('input[name="password"]').should("be.empty").type(setPassword);
    cy.get('button[type="submit"]').click();
  });

  it("Check for subscription plan", () => {
    cy.contains("Yearly").should("be.visible");
    cy.contains('button[type="button"]', "Buy Now").click();
  });

  it("Check for payment information", () => {
    // cy.get(".col-span-2 > .__PrivateStripeElement > iframe").within(($form) => {
    //   cy.wrap($form).should("have.class", "form-container");
    // });
    // let iframe_selector = ".__PrivateStripeElement";
    // let element_to_find_selector =
    //   'aria-label=["Credit or debit card CVC/CVV"]';
    // cy.frameLoaded(iframe_selector);
    // cy.wait(5000);
    // cy.iframe().find(element_to_find_selector).type("hello temp").wait(5000);
  });
});
