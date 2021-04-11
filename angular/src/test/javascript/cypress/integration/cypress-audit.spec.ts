describe('Audits', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    
    // it('should run pa11y', () => {
    //     cy.pa11y();
    // });
  
    it('should run performance audits using custom thresholds', () => {
      const customThresholds = {
        performance: 50,
        accessibility: 50,
        seo: 70,
        'first-contentful-paint': 2000,
        'largest-contentful-paint': 3000,
        'cumulative-layout-shift': 0.1,
        'total-blocking-time': 500,
      };
  
      const desktopConfig = {
        extends: 'lighthouse:default',
        formFactor: 'desktop',
        screenEmulation: {disabled: true}
      };
      cy.lighthouse(customThresholds, desktopConfig);
    });
  });