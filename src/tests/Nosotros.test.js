import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import Nosotros from '../pages/Nosotros';

describe('Página Nosotros', () => {
  it('debería mostrar información sobre la tienda', () => {
    const { getByText } = render(<Nosotros />);
    expect(getByText(/Level-Up Gamer/i)).to.exist;
  });
});
