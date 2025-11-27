import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo - Level Up.png";
import cartIcon from "../assets/img/carrito-de-compras-512x512.png";
import { useAuth } from "../components/context/authContext";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // 📌 Usuario con rol desde el backend
  const { userBD } = useAuth();
  const isAdmin = userBD?.idRol === 2;


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-level">
        <div className="container-fluid">

          <img src={logo} alt="LevelUp" className="navbar-brand" style={{ height: "64px" }} />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            {/* IZQUIERDA */}
            <ul className="navbar-nav me-auto">
              <li><Link className="nav-link nav-level" to="/">Home</Link></li>
              <li><Link className="nav-link nav-level" to="/catalogo">Catálogo</Link></li>
              <li><Link className="nav-link nav-level" to="/nosotros">Nosotros</Link></li>
            </ul>

            {/* DERECHA */}
            <div className="d-flex align-items-center gap-2 ms-auto">

              {/* Mostrar botón ADMIN SOLO si idRol=2 */}
              {isAdmin && (
                <Link to="/admin" className="btn btn-warning btn-sm me-2">
                  Panel Admin
                </Link>
              )}

              {user ? (
                <>
                  <span className="text-light me-2">👤 {user.displayName || user.email}</span>
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
