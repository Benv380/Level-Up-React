import productos from "../components/Catalogo";


function Catalogo() {
  return (
     <div className="row">
      {productos.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
          <div
            className="card h-100 shadow"
            style={{
              backgroundColor: "#1E90FF",
              color: "#39FF14",
              borderRadius: "8px",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <img
              src={p.imagen || "https://via.placeholder.com/300"}
              className="card-img-top rounded-top"
              alt={p.nombre}
            />
            <div className="card-body d-flex flex-column">
              <h4 className="card-title">{p.nombre}</h4>
              <p className="mb-1">
                <strong>{p.categoria}</strong>
              </p>
              <p className="text-muted medium">{p.descripcion}</p>
              <button
                type="button"
                className="cart-btn btn btn-outline-dark mt-auto fw-bold"
                style={{
                  backgroundColor: "#1E90FF",
                  borderColor: "#39FF14",
                  color: "#39FF14",
                  fontFamily: "'Roboto', sans-serif",
                }}
                data-product-id={p.id}
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