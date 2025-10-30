import React from "react";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../components/context/CartContext";
import Catalogo from "./Catalogo";

describe("Catalogo (Card)", () => {
  it("Busca que se renderizan 10 cards de producto", () => {
    render(
      <CartProvider>
        <Catalogo />
      </CartProvider>
    );

    const cards = screen.getAllByTestId("producto");
    expect(cards.length).toBe(10);
  });
});

describe("Busca un producto específico por su título", () => {
  it("debe renderizar el producto correcto", () => {
    render(
      <CartProvider>
        <Catalogo />
      </CartProvider>
    );
    expect(screen.getByRole("heading", { name: "Catan", level: 4 })) // Busca un texto exacto en el contenido
      .toBeInTheDocument(); //Verifica que el elemento (nombre buscado) existe en el DOM renderizado.
  });
});

describe("Busca un producto específico por su título", () => {
  it("debe renderizar el producto correcto", () => {
    render(
      <CartProvider>
        <Catalogo />
      </CartProvider>
    );
    expect(screen.getByRole("heading", { name: "Carcassonne", level: 4 })) // Busca un texto exacto en el contenido
      .toBeInTheDocument(); //Verifica que el elemento (nombre buscado) existe en el DOM renderizado.
  });
});




