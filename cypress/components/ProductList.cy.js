import React from 'react';
import ProductList from '../../src/components/productSection/ProductList'; // Ścieżka do komponentu

describe('ProductList Component', () => {

  it('mounts', () => {
    cy.mount(<ProductList />)
    //Stepper should have initial count of 0 (default)
    cy.get('test1').should('have.text', 'test1')
  })
});
