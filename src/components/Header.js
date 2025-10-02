import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg pastel-navbar">
        <div className="container-fluid">
          <img
            className="logo"

            alt="Logo Pastelería"
          />
          <a className="navbar-brand ms-3" href="#">
            Pastelería Mil Sabores
          </a>
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

          <div className="collapse navbar-collapse" id="header">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-decoration-none">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a 
                  id="txtregistro"
                  className="nav-link" 
                  href="registro.html">
                  Registrarse
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="txtnoticias"
                  className="nav-link"
                  href="https://www.duoc.cl/noticias/"
                >
                  Blogs y Noticias
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="txtrecetas"
                  className="nav-link"
                  href="perfil-usuario.html"
                >
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a id="txtconsejos" className="nav-link" href="#">
                  Consejos
                </a>
              </li>
              <li className="av-item">
                <a className="nav-link" href="" id="txtsalir">
                  Salir
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  id="txtmenu"
                  className="nav-link dropdown-toggle"
                  href="menu.html"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Menú
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="menu.html">
                      Pasteles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="menu.html">
                      Galletas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="menu.html">
                      Dulces
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="administrador.html">
                      Administrador
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
              />
              <button className="btn btn-buscar" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}