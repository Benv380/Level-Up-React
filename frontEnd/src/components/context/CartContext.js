import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("Agregado al carrito:", product);

    const normalized = {
      id: product.id_producto,       
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      quantity: 1,
    };

    setCart((prev) => {
      const existing = prev.find((item) => item.id === normalized.id);

      if (existing) {
        return prev.map((item) =>
          item.id === normalized.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, normalized];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
