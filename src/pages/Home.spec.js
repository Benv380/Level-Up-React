import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Elementos del Home', () => {
  it('Busca titulo de elementos', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Descubre lo nuevo/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe('Elementos del Home', () => {
  it('Busca titulo de elementos (Eventos destacados)', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Eventos destacados/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe('Elementos del Home (Mapa de ubicaciones)', () => {
  it('Busca titulo de elementos', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Mapa de ubicaciones/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

  it('Busca 6 títulos (h2) de producto', () => { 
    render(<Home />);
    const titles = screen.getAllByRole('heading', { level: 2 }); // Busca por rol "heading" nivel 2 (equivale a <h2>)
    expect(titles.length).toBe(9);
  });