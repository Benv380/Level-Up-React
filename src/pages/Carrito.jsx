import React, { useEffect, useState } from "react";
import '../css/Carrito.css';
import { useAuth } from "../components/authContext";

const Carrito = () => {         //funcion para correo 
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user && user.email) {
      setEmail(user.email);
    }
  }, [user]);
    
  return (
    <section className="carrito">
      <h1 className="titulo">/YOUR CART</h1>

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
            <label htmlFor="email"></label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!user} />
          </div>

          <div className="form-group">
            <label htmlFor="region">Region de despacho</label>
            <select id="region" name="region">
            <option value="SELECCIONE UNA OPCION"></option>
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
            <label htmlFor="direccion">direccion de despacho</label>
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


          <div className="total">
            <p>Total</p>
            
          </div>

          <button className="btn-pago">Payment</button>
        </div>
      </div>
    </section>
  );
};

export default Carrito;

