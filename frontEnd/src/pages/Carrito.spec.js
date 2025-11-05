import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrito from './Carrito';
import { AuthProvider } from '../components/context/authContext';
import { CartProvider } from '../components/context/CartContext';


describe('Elementos del Carrito', () => {
    it('Tu Carrito', async () => {
        render(
            <AuthProvider>
                <Carrito />
            </AuthProvider>
        );
        const titulo = await screen.findByText(/Tu Carrito/i);
        expect(titulo).toBeInTheDocument();
    });
});


