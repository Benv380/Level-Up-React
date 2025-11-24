import { useEffect, useState } from "react";
import { useCart } from "../components/context/CartContext";
import "../css/Catalogo.css";

function Catalogo() {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  // Llamada al microservicio de productos
  fetch("http://localhost:8080/catalogo")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
      return response.json();
    })
    .then((data) => {
      // Extraer lista HATEOAS
      const listaProductos = data._embedded?.productList || [];
      setProductos(listaProductos);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error al cargar productos:", error);
      setError(error.message);
      setLoading(false);
    });
}, []);

  if (loading) {
    return <p className="text-center mt-5">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-danger mt-5">Error: {error}</p>;
  }

  return (
    <section className="catalogo-page">
      <div className="container py-3">
        <div className="row g-4 catalogo-row">
          <h1 className="catalogo-titulo">Catálogo de Productos</h1>
          {productos.map((p) => (
            <div key={p.id} className="catalogo-card-col col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card h-100 shadow catalogo-card" data-testid="producto">
                <img
                  src={p.imagen}
                  className="card-img-top rounded-top"
                  alt={p.nombre}
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{p.nombre}</h4>
                  <p className="mb-1"><strong>{p.categoria}</strong></p>
                  <p className="text-muted medium">{p.descripcion}</p>
                  <button
                    type="button"
                    className="cart-btn btn btn-outline-dark mt-auto fw-bold"
                    id="add-to-cart-btn"
                    onClick={() => addToCart(p)}
                  >
                    Agregar al carro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;
