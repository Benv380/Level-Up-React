import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Página Home', () => {
  it('debería renderizar el título de bienvenida', () => {
    const { getByText } = render(<Home />);
    expect(getByText(/Bienvenido/i)).to.exist;
  });
});
