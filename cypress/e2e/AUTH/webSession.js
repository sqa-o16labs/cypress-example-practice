describe("Web Login with session management and fixtures", () => {

});

it("login with pre-defined user", () => {
  cy.login("anas58@yopmail.com", "User@test123");
});

it.only("login with fixture", () => {
  cy.fixture("users").then((user) => {
    cy.login(user.email, user.password); 
    cy.get('div[id="1"]', {timeout: 10000}).should('have.text','Login successfully')
    cy.contains("Welcome");
  });
});
