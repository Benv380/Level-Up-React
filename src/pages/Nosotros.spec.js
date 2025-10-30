import React from "react";
import { render, screen} from "@testing-library/react";
import { CartProvider } from "../components/context/CartContext";
import Nosotros from "./Nosotros";

describe('Elementos de Nosotros', () => {
  it('Busca titulo de "Sobre Nosotros"', async () => {
    render(<Nosotros />);
    const titulo = await screen.findByText(/Sobre Nosotros/i);
    expect(titulo).toBeInTheDocument();
  }); 
});

describe("Nosotros (Card)", () => {
  it("Busca que se renderizan 2 cards de producto", () => {
    render(
      <CartProvider>
        <Nosotros />
      </CartProvider>
    );

    const card = screen.getAllByTestId("mision-card");
    expect(card.length).toBe(2);
  });
});