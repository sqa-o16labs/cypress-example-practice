const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    video: false,
    testIsolation: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    viewportWidth: 1024,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.js",
    defaultCommandTimeout: 5000,
  },
});
