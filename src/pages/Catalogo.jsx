import productos from "../components/Catalogo";
import { useCart } from "../components/context/CartContext";
import "../css/Catalogo.css";



function Catalogo() {
  const { addToCart } = useCart();

  return (
    <div className="row">
      {productos.map((producto) => (
        <div key={producto.id} id="card-prod" className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
          <div
            className="card h-100 shadow" id="prod-card" data-testid="producto"
            style={{
              backgroundColor: "#121213ff",
              color: "#ffffffff",
              borderRadius: "8px",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <img
              src={producto.imagen}
              className="card-img-top rounded-top"
              alt={producto.nombre}
            />
            <div className="card-body d-flex flex-column">
              <h4 className="card-title">{producto.nombre}</h4>
              <p className="mb-1">
                <strong>{producto.categoria}</strong>
              </p>
              <p className="text-muted medium">{producto.descripcion}</p>
              <button
                type="button"
                className="cart-btn btn btn-outline-dark mt-auto fw-bold"
                style={{
                  backgroundColor: "#000000ff",
                  borderColor: "#7f887dff",
                  color: "#ffffffff",
                  fontFamily: "'Roboto', sans-serif",
                }}
                onClick={() => addToCart(producto)}
              >
                Agregar al carro
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Catalogo;