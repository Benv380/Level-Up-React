import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
// antes: import Registro from '../pages/Registro';
// ahora:
import Registro from '../pages/Register'; // coincide con Register.jsx

describe('Página Registro', () => {
  it('debería contener el texto "Crear cuenta"', () => {
    const { getByText } = render(<Registro />);
    expect(getByText(/Crear cuenta/i)).to.exist;
  });
});
