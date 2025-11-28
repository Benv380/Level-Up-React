// src/pages/AdminPage.jsx
import React from "react";
import "../css/AdminPage.css";

export default function AdminPage() {
  return (
    <section className="admin-page">
      <div className="admin-container">
        <h1 className="admin-title">Panel de Administración</h1>
        <p className="admin-description">
          Acceso rápido a los paneles de Swagger:
        </p>

        <ul className="admin-list">
          <li className="admin-item">
            <a
              href="http://localhost:8081/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span className="admin-icon">🔑</span>
              <span>Usuarios / Correos Admin (Swagger)</span>
            </a>
          </li>

          <li className="admin-item">
            <a
              href="http://localhost:8080/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span className="admin-icon">🛒</span>
              <span>Productos (Swagger)</span>
            </a>
          </li>

          <li className="admin-item">
            <a
              href="http://localhost:8083/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <span className="admin-icon">💰</span>
              <span>Ventas (Swagger)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
