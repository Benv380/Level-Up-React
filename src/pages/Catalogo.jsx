// pages/Catalogo.jsx
import productos from "../components/Catalogo";
import { useCart } from "../components/context/CartContext";
import "../css/Catalogo.css";

function Catalogo() {
  const { addToCart } = useCart();

  return (
    <section className="catalogo-page">
      <div className="container py-3">
        <div className="row g-4 catalogo-row">
          {productos.map((p) => (
            <div key={p.id} className="catalogo-card-col col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card h-100 shadow catalogo-card" data-testid="producto">
                <img src={p.imagen} className="card-img-top rounded-top" alt={p.nombre} loading="lazy" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">{p.nombre}</h4>
                  <p className="mb-1"><strong>{p.categoria}</strong></p>
                  <p className="text-muted medium">{p.descripcion}</p>
                  <button type="button" className="cart-btn btn btn-outline-dark mt-auto fw-bold"
                          onClick={() => addToCart(p)}>
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
