import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Elementos del Home', () => {
  it('Busca titulo de productos', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Nuestros Productoso/i);
    expect(titulo).toBeInTheDocument();
  }); 
});
