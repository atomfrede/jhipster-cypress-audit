// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
/**
 * @type {Cypress.PluginConfig}
 */
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
// const { ReportGenerator } = require('lighthouse-core/report/ReportGenerator.js')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('before:browser:launch', (browser, launchOptions) => {
  
    launchOptions.args.push('--output json --output html')
    prepareAudit(launchOptions);
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu');
      return launchOptions;
    }

    
  });

  on('task', {
    lighthouse: lighthouse((lighthouseReport) => {
      // Combine the json with https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/report/html/report-template.html to generate HTML Report
      console.log(lighthouseReport); // raw lighthouse reports
      // ReportGenerator.generateReport(lighthouseReport, 'html');
    }),
    pa11y: pa11y(),
  });
};
