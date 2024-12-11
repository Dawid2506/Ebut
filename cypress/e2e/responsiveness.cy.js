describe('Responsive tests for ProductList', () => {
  
    beforeEach(() => {
      // Intercept API requests if data is required
      cy.intercept('GET', 'http://localhost:5000/readFromItem', { fixture: 'products.json' }).as('getProducts');
      
      // Open the application
      cy.visit('http://localhost:3000');
      cy.wait('@getProducts');
    });
  
    it('should display correctly on desktop resolution', () => {
      // Set resolution for desktop
      cy.viewport(1280, 720);
      
      // Check if the product list is displayed correctly
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10); // Check the number of elements
    });
  
    it('should display correctly on mobile resolution', () => {
      // Set resolution for mobile devices
      cy.viewport('iphone-x');
      
      // Check if products are visible in mobile mode
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10);
      
      // Check if the layout is appropriately changed
      cy.get('.items > div').first().within(() => {
        cy.get('img').should('have.attr', 'src');
      });
    });
  
    it('should display correctly on tablet resolution', () => {
      // Set resolution for tablet
      cy.viewport('ipad-2');
      
      // Check the display of elements
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10);
      
      // You can also check specific CSS elements
      cy.get('.items > div').first().should('have.css', 'display', 'block'); // or other logic for tablet
    });
  
});
