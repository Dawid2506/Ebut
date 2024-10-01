describe('Responsive tests for ProductList', () => {
  
    beforeEach(() => {
      // Interceptowanie zapytań do API, jeśli dane są wymagane
      cy.intercept('GET', 'http://localhost:5000/readFromItem', { fixture: 'products.json' }).as('getProducts');
      
      // Otwórz aplikację
      cy.visit('http://localhost:3000');
      cy.wait('@getProducts');
    });
  
    it('should display correctly on desktop resolution', () => {
      // Ustawienie rozdzielczości dla desktopu
      cy.viewport(1280, 720);
      
      // Sprawdzenie czy lista produktów jest poprawnie wyświetlana
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10); // Sprawdzenie liczby elementów
    });
  
    it('should display correctly on mobile resolution', () => {
      // Ustawienie rozdzielczości dla urządzeń mobilnych
      cy.viewport('iphone-x');
      
      // Sprawdzenie czy produkty są widoczne w trybie mobilnym
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10);
      
      // Sprawdzenie, czy układ jest odpowiednio zmieniony
      cy.get('.items > div').first().within(() => {
        cy.get('img').should('have.attr', 'src').should('include', 'shoesOne.png');
      });
    });
  
    it('should display correctly on tablet resolution', () => {
      // Ustawienie rozdzielczości dla tabletu
      cy.viewport('ipad-2');
      
      // Sprawdzenie wyświetlania elementów
      cy.get('.items > div').should('be.visible');
      cy.get('.items > div').should('have.length', 10);
      
      // Możesz również sprawdzić specyficzne elementy CSS
      cy.get('.items > div').first().should('have.css', 'display', 'block'); // lub inna logika dla tabletu
    });
  
  });
  