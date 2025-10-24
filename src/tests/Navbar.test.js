import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
// usa Header en lugar de Navbar (ajusta si tu archivo se llama Header.js o Header.jsx)
import Header from '../components/Header';

describe('Componente Header (navbar)', () => {
  it('debería contener el enlace al inicio', () => {
    const { getByText } = render(<Header />);
    // acepta "Inicio" o "Home"
    expect(getByText(/(Inicio|Home)/i)).to.exist;
  });
});



