const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  browser: 'chrome', //Browser defaul saat menjalankan e2e
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com', //base url
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
