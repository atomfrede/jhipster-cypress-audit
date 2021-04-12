describe('Audits', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    
    // it('should run pa11y', () => {
    //     cy.pa11y();
    // });
  
    it('should run performance audits using custom thresholds', () => {
      const customThresholds = {
        performance: 90,
        accessibility: 90,
        seo: 90,
        'best-practices': 90,
        pwa: 0,
      };
  
      const desktopConfig = {
        extends: 'lighthouse:default',
        formFactor: 'desktop',
        screenEmulation: {disabled: true}
      };
      cy.lighthouse(customThresholds, desktopConfig);
    });
  });
