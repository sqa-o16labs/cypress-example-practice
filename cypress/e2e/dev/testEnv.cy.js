describe('Testing with different files', () => {
    it('Visits the Application Based on Config File', () => {
        const baseUrl = Cypress.env('stageURL');
        const username = Cypress.env('username');

        // Check if environment variables are loaded
        cy.log(`Stage URL: ${baseUrl}`);
        cy.log(`Username: ${username}`);

        // Visit the URL only if it is valid
        if (baseUrl) {
            cy.visit(baseUrl);
        } else {
            cy.log('Error: baseUrl is not defined');
        }
    });
});
