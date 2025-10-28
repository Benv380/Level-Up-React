import React, { useEffect, useState } from "react";
import "../css/Carrito.css";
import { useAuth } from "../components/context/authContext";

const Carrito = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState(user?.email || "");

  // Estado para productos del carrito (desde localStorage) asegurando "cantidad"
  const [cartItems, setCartItems] = useState(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    return items.map((item) => ({ ...item, cantidad: item.cantidad || 1 }));
  });

  useEffect(() => {
    if (user?.email) setEmail(user.email);
  }, [user]);

  // Helpers
  const clp = (n) => Number(n || 0).toLocaleString("es-CL");

  // Cantidad +/-
  const incrementarCantidad = (id) => {
    const updated = cartItems.map((it) =>
      it.id === id ? { ...it, cantidad: it.cantidad + 1 } : it
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const disminuirCantidad = (id) => {
    const updated = cartItems.map((it) =>
      it.id === id && it.cantidad > 1 ? { ...it, cantidad: it.cantidad - 1 } : it
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <section className="carrito">
      <h1 className="titulo">Tu Carrito</h1>

      <div className="carrito-container">
        {/* FORMULARIO */}
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

          <div className="form-group">
            <label htmlFor="region">Región de despacho</label>
            <select id="region" name="region" defaultValue="SELECCIONE UNA OPCIÓN">
              <option value="SELECCIONE UNA OPCIÓN">SELECCIONE UNA OPCIÓN</option>
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
            <label htmlFor="direccion">Dirección de despacho</label>
            <input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Ej: Av. Siempre Viva 742, Santiago"
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha de entrega</label>
            <input type="date" id="fecha" name="fecha" />
          </div>
        </form>

        {/* PRODUCTOS */}
        <div className="carrito-productos">
          {cartItems.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            <>
              <div className="items-head">
                <span>Item</span>
                <span>Precio</span>
                <span>Cantidad</span>
                <span className="align-right">Subtotal</span>
              </div>

              {cartItems.map((producto) => (
                <div key={producto.id} className="item-row">
                  <div className="item-info" title={producto.nombre}>
                    {/* Imagen activa. Si algún producto no tiene imagen, cae en el onError */}
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/80x80?text=Sin+img";
                      }}
                    />
                    <h3 className="item-title">{producto.nombre}</h3>
                  </div>

                  <div className="price">${clp(producto.precio)}</div>

                  <div className="contador">
                    <button type="button" onClick={() => disminuirCantidad(producto.id)} aria-label="Disminuir">
                      −
                    </button>
                    <span>{producto.cantidad}</span>
                    <button type="button" onClick={() => incrementarCantidad(producto.id)} aria-label="Aumentar">
                      +
                    </button>
                  </div>

                  <div className="subtotal align-right">
                    ${clp(producto.precio * producto.cantidad)}
                  </div>
                </div>
              ))}

              <div className="total">
                <p>Total</p>
                <p>
                  $
                  {clp(
                    cartItems.reduce((acc, p) => acc + p.precio * p.cantidad, 0)
                  )}
                </p>
              </div>
            </>
          )}

          <button className="btn-pago">Pagar</button>
        </div>
      </div>
    </section>
  );
};

export default Carrito;
