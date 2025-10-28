import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Elementos del Home', () => {
  it('Busca titulo de "Descubre lo nuevo"', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Descubre lo nuevo/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe('Elementos del Home', () => {
  it('Busca titulo de "Eventos Destacados"', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Eventos Destacados/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe('Elementos del Home', () => {
  it('Busca titulo de "Mapa de ubicaciones"', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Mapa de ubicaciones/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe('Elementos del Home', () => {
  it('Busca titulo de "Opiniones de Nuestros Gamers"', async () => {
    render(<Home />);
    const titulo = await screen.findByText(/Opiniones de Nuestros Gamers/i);
    expect(titulo).toBeInTheDocument();
  }); 
});



