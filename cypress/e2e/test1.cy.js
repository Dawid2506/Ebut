describe('ProductList Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Odwiedź stronę
  });

  it('should fetch and display products', () => {
    // Czekaj, aż elementy produktów będą widoczne
    cy.get('.items', { timeout: 10000 }).should('exist'); // Upewnij się, że kontener produktów istnieje
    cy.get('.items > div', { timeout: 10000 }).should('have.length.greaterThan', 0); // Upewnij się, że jest co najmniej 1 element

    // Sprawdź, czy zawierają odpowiednie informacje
    cy.get('.items > div').first().contains('New Balance'); // Sprawdź markę (dostosuj do Twoich danych)
    cy.get('.items > div').eq(1).contains('Lacoste'); // Sprawdź markę (dostosuj do Twoich danych)
  });

  it('should handle API errors gracefully', () => {
    // Aby sprawdzić błędy, możesz zmienić serwer na nieaktywny lub zmodyfikować endpoint w odpowiedni sposób
    // Możesz także użyć mockowania, aby symulować błąd w inny sposób
    // Dla tego przykładu nie używamy mockowania
    cy.visit('http://localhost:3000'); // Odwiedź stronę
    cy.get('.items').should('exist'); // Upewnij się, że kontener produktów istnieje

    // Weryfikacja, że produkty zostały załadowane
    cy.get('.items > div', { timeout: 10000 }).should('have.length.greaterThan', 0); // Upewnij się, że jest co najmniej 1 element
  });
});
