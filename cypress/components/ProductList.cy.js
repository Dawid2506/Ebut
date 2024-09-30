import React from 'react';
import ProductList from '../../src/components/productSection/ProductList'; // Ścieżka do komponentu

describe('ProductList Component', () => {
  it('Should fetch data and render items correctly', () => {
    // Mockowanie odpowiedzi axios
    cy.intercept('GET', 'http://localhost:5000/readFromItem').as('fetchItems');

    cy.wait('@fetchItems').its('request.body').should('include', {
      brand: 'Lacoste',
    });
    // // Montowanie komponentu
    // mount(<ProductList />);

    // // Sprawdzenie, czy dane zostały pobrane
    // cy.wait('@fetchItems');

    // // Sprawdzenie, czy odpowiednie elementy zostały wyrenderowane
    // cy.get('.items').children().should('have.length', 2);

    // // Sprawdzenie szczegółów każdego elementu
    // cy.get('.items').children().eq(0).contains('Nike');
    // cy.get('.items').children().eq(1).contains('Adidas');
  });
});
