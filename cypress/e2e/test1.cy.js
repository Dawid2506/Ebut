// cypress/e2e/productList.cy.js

describe('ProductList Component', () => {
  beforeEach(() => {
    // Set up interceptor for API
    cy.intercept('GET', 'http://localhost:5000/readFromItem', { fixture: 'products.json' }).as('getProducts');

    // Open the application
    cy.visit('http://localhost:3000');
  });

  it('should fetch and display products', () => {
    // Wait for API response
    cy.wait('@getProducts');

    // Check if the number of elements is as expected
    cy.get('.items > div').should('have.length', 10); // Should be 2 elements

    // Check if the elements are rendered correctly
    cy.get('.items > div').first().within(() => {
      cy.contains('New Balance');
      cy.contains('574');
    });

    cy.get('.items > div').last().within(() => {
      cy.contains('Fila');
      cy.contains('Disruptor');
    });
  });

  it('should load products within acceptable time', () => {
    cy.intercept('GET', 'http://localhost:5000/readFromItem', {
      statusCode: 200,
      body: Array.from({ length: 1000 }, (_, index) => ({
        brand: `Brand ${index}`,
        model: `Model ${index}`,
        price: index + 100,
        availableSizes: [39, 40, 41, 42, 43, 47],
      }))
    }).as('getLargeProducts');

    cy.visit('http://localhost:3000');
    cy.wait('@getLargeProducts');
    cy.get('[data-test-id="test1"]').should('be.visible');

    // Measure loading time
    const start = performance.now();
    cy.get('.items > div').should('have.length', 1000);
    const end = performance.now();
    const loadTime = end - start;

    expect(loadTime).to.be.lessThan(2000); // Set the loading time limit
  });

  it('should render a large number of products', () => {
    cy.intercept('GET', 'http://localhost:5000/readFromItem', {
      statusCode: 200,
      body: Array.from({ length: 1000 }, (_, index) => ({
        brand: `Brand ${index}`,
        model: `Model ${index}`,
        price: index + 100,
        availableSizes: [39, 40, 41, 42, 43, 47],
      }))
    }).as('getLargeProducts');

    cy.visit('http://localhost:3000');
    cy.wait('@getLargeProducts');

    // Sprawdź, czy liczba elementów jest zgodna z oczekiwaną
    cy.get('.items > div').should('have.length', 1000);
  });

  // it('should handle API errors gracefully', () => {
  //   cy.intercept('GET', 'http://localhost:5000/readFromItem', {
  //     statusCode: 500,
  //     body: { message: 'Internal Server Error' }
  //   }).as('getError');

  //   cy.visit('http://localhost:3000');
  //   cy.wait('@getError');

  //   // Sprawdź, czy wyświetlany jest komunikat o błędzie
  //   cy.contains('Error fetching data').should('be.visible');
  // });

});
