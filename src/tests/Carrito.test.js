import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import Carrito from '../pages/Carrito';

describe('Página Carrito', () => {
  it('debería mostrar el título del carrito', () => {
    const { getByText } = render(<Carrito />);
    expect(getByText(/Carrito/i)).to.exist;
  });
});
