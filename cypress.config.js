const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 720,
  viewportWidth: 1280,
  chromeWebSecurity: false,
  browser: 'chrome', //Browser defaul saat menjalankan e2e

  screenshotsFolder: 'cypress/screenshots', // Folder penyimpanan screenshot
  screenshots: true, //aktifkan perekaman screenshoot
  videosFolder: 'cypress/videos', // Folder penyimpanan video
  video: true, // Aktifkan perekaman video
  videoCompression: 32, // Kompresi video
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    viewportHeight : 720,
    viewportHeight : 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


