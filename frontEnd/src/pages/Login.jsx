import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { iniciarSesion } from "../components/firebaseUtils";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const resultado = await iniciarSesion(email, password);
 
    
    if (resultado.ok) {
      localStorage.setItem("user", JSON.stringify(resultado.datos));
      alert(`✅ Bienvenido, ${resultado.datos.nombre}`);
      navigate("/");
    } else {
      setError(resultado.error || "Usuario o contraseña incorrecta");
    }
  };
  
  return (
    
    <div>
      <h1 className="titulo-login">Inicio de Sesión</h1>
      <Helmet>
        <title>Iniciar Sesión | Level Up</title>
      </Helmet>
      <div className="login-container">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <main>
          <div className="auth-header">
            <h1 className="auth-title" id="title-login">Iniciar Sesión</h1>
            <p className="auth-subtitle">Bienvenido de vuelta a Level-Up Gamer</p>
          </div>
          <form onSubmit={handleLogin} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Iniciar sesión
            </button>
            {error && (
              <div className="mensaje-error" style={{ marginTop: "1rem" }}>
                {error}
              </div>
            )}
          </form>
          <div className="auth-footer">
            <p>
              ¿No tienes cuenta?{" "}
              <a href="/register" className="auth-link">
                Regístrate aquí
              </a>
            </p>
            <p>
              <a href="/" className="auth-link">
                Volver al inicio
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}