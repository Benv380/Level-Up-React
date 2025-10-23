import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo - Level Up.png";
import cartIcon from "../assets/img/carrito-de-compras-512x512.png";
import { useAuth } from "../components/context/authContext"; 
import '../pages/Carrito'

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-level">
        <div className="container-fluid">
          {/* Logo (izquierda) */}
          <img
            src={logo}
            alt="LevelUp"
            className="navbar-brand me-3"
            style={{ height: "64px" }}
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
            {/* IZQUIERDA: links + búsqueda */}
            <div className="d-flex align-items-center gap-3 me-auto flex-wrap">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
                <li className="nav-item">
                  <Link className="nav-link nav-level" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-level" to="/catalogo">Catálogo</Link>
                </li>
                <li className="nav-item categorias">
                  <Link className="nav-link nav-level" to="/nosotros">Nosotros</Link>
                </li>
              </ul>

              <form className="d-flex align-items-center gap-2" role="search">
                <input
                  className="form-control input-level"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
                <button className="btn btn-level" type="submit">Buscar</button>
              </form>
            </div>

            {/* DERECHA: login / logout + carrito */}
            <div className="d-flex align-items-center gap-2 ms-auto">

             


              { 
               
              user ? (
                <>
                  <span className="text-light me-2">
                    👤 { user.displayName || user.email }
                  </span>
                  <button onClick={logout} className="btn btn-outline-light btn-sm">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-level">Login</Link>
                  <Link to="/register" className="btn btn-level">Register</Link>
                </>
              )}
              <Link to="/Carrito" className="btn btn-icon-level" aria-label="Carrito">
                <img src={cartIcon} alt="Carrito" className="icon-cart" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
