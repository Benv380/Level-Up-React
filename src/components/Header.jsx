import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src="assets/img/Logo - Level Up.png"
            alt="LevelUp"
            className="navbar-brand"
            style={{ height: "100px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/catalogo">
                  Catálogo
                </Link>
              </li>
              <li className="nav-item categorias">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="categoria"
                >
                  Categorias
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <li className="btn btn-outline-success">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
            {/* Botón dinámico */}
            <a id="navbar-btn" className="btn btn-primary ms-3" href="#">
              {/* Aquí puedes poner texto o ícono dinámico */}
            </a>
            <Link to="/carrito">
              <img
                //src={require("../assets/img/carrito-de-compras-512x512.png")}
                alt="Carrito"
                style={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}