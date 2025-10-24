import React from 'react';
import { expect } from 'chai';
import { render, fireEvent } from '@testing-library/react';
import Login from '../pages/Login';

describe('Página Login', () => {
  it('debería mostrar el botón de ingresar', () => {
    const { getByText } = render(<Login />);
    expect(getByText(/Ingresar/i)).to.exist;
  });

  it('debería permitir escribir un correo electrónico', () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText(/Correo electrónico/i);
    fireEvent.change(emailInput, { target: { value: 'test@correo.com' } });
    expect(emailInput.value).to.equal('test@correo.com');
  });
});
