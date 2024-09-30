// cypress/e2e/productList.cy.js

describe('ProductList Component', () => {
    beforeEach(() => {
      // Set up interceptor for API
      cy.intercept('GET', 'http://localhost:5000/readFromItem', {
        statusCode: 200,
        body: [
          { brand: 'New Balance', model: 'Model A', price: 100, availableSizes: [39, 40, 41, 42, 43, 47] },
          { brand: 'Adidas', model: 'Model B', price: 120, availableSizes: [39, 40, 41, 42, 43, 47] }
        ]
      }).as('getProducts');
  
      // Open the application
      cy.visit('http://localhost:3000');
    });
  
    it('should fetch and display products', () => {
      
    });
  });
  