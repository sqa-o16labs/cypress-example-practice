const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    screenshotOnRunFailure: false,
    watchForFileChanges: false,
    viewportWidth: 1024,
    viewportHeight: 720,
    defaultCommandTimeout: 5000
  },
});
