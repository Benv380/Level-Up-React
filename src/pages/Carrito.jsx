import React, { useEffect, useState } from "react";
import '../css/Carrito.css';
import { useAuth } from "../components/context/authContext";
import { addToCart, getCartItems } from "../components/Utils";

const Carrito = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || "");

  // Estado para los productos del carrito
  const [cartItems, setCartItems] = useState(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    // Asegurarse de que cada producto tenga cantidad
    return items.map(item => ({ ...item, cantidad: item.cantidad || 1 }));
  });

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email); // se inicializa al montar
    }
  }, [user]);

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);

  // Funciones para manejar cantidad
  function incrementarCantidad(id) {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  function disminuirCantidad(id) {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <section className="carrito">
      <h1 className="titulo">Tu Carrito</h1>

      <div className="carrito-container">
        <form className="carrito-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej: Pedro Pazcal" />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Mobile</label>
            <input type="tel" id="telefono" name="telefono" placeholder="+56 9 9999 9999" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@gmail.cl"
            />
          </div>

          <div className="form-group" placeholder="SELECCIONE UNA OPCION">
            <label htmlFor="region">Region de despacho</label>
            <select id="region" name="region">
              <option value="SELECCIONE UNA OPCION">SELECCIONE UNA OPCIÓN</option>
              <option value="Arica y Parinacota">Arica y Parinacota</option>
              <option value="Tarapacá">Tarapacá</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="Coquimbo">Coquimbo</option>
              <option value="Valparaíso">Valparaíso</option>
              <option value="Metropolitana">Metropolitana</option>
              <option value="O'Higgins">O'Higgins</option>
              <option value="Maule">Maule</option>
              <option value="Biobío">Biobío</option>
              <option value="Araucanía">Araucanía</option>
              <option value="Los Ríos">Los Ríos</option>
              <option value="Los Lagos">Los Lagos</option>
              <option value="Aysén">Aysén</option>
              <option value="Magallanes">Magallanes</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="direccion">Direccion de despacho</label>
            <input type="text" id="direccion" name="direccion" placeholder="Ej: Av. Siempre Viva 742, Santiago" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fecha">Fecha de entrega</label>
              <input type="date" id="fecha" name="fecha" />
            </div>
          </div>
        </form>

        {/* Productos del carrito */}
        <div className="carrito-productos">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cartItems.map((producto) => (
              <div key={producto.id} className="producto">
                <h2>{producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>

                {/* Contador + / - */}
                <div className="contador">
                  <button type="button" onClick={() => disminuirCantidad(producto.id)}>-</button>
                  <span>{producto.cantidad}</span>
                  <button type="button" onClick={() => incrementarCantidad(producto.id)}>+</button>
                </div>

                <p>Subtotal: ${producto.precio * producto.cantidad}</p>
              </div>
            ))
          )}

          <div className="total">
            <p>Total</p>
            <p>${cartItems.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)}</p>
          </div>

          <button className="btn-pago">Pagar</button>
        </div>
      </div>
    </section>
  );
};


export default Carrito;

