const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      on('file:preprocessor', cucumber())
    },
    baseUrl: 'https://qa-test.ticto.io/',
    specPattern: 'cypress/**/**/*.feature',
    excludeSpecPattern: "**/cypress/e2e/pages/*,cypress/e2e/steps-definition/*",
    experimentalSessionAndOrigin: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    requestTimeout: 30000,
    scripts: {
      "cy:run": "cypress run"
    },
    numTestsKeptInMemory: 1,
    // numTestsKeptInMemory: 0,
    retries: {
      runMode: 3,
      openMode: 3,
    },
  },
})
