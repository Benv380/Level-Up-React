import React, { useState } from "react";
import { registrarUsuario } from "../components/firebaseUtils";
import "../css/Registro.css";

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    numero: "",
    fechaNacimiento: "",
    email: "",
    password: "",
    confirmPassword: "",
    terminos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (!formData.terminos) {
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    // Llamada al registro completo (Firebase + Oracle)
    const resultado = await registrarUsuario(formData);

    if (resultado.ok) {
      alert("✅ Usuario registrado correctamente");
      window.location.href = "/";
    } else {
      alert("❌ Error: " + resultado.error);
    }
  };

  return (
    <div>
      <h1 className="titulo-registro">Registro de Usuario</h1>
      <div className="auth-header">
        <h1 className="auth-title">Crear Cuenta</h1>
        <p className="auth-subtitle">Únete a la comunidad Level-Up Gamer</p>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            name="nombre"
            id="nombre"
            className="form-input"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="numero">Número</label>
          <input
            name="numero"
            id="numero"
            className="form-input"
            placeholder="Número"
            value={formData.numero}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            name="fechaNacimiento"
            id="fechaNacimiento"
            className="form-input"
            type="date"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
          <small style={{ color: "var(--color-texto-secundario)" }}>
            Debes ser mayor de 18 años
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo</label>
          <input
            name="email"
            id="email"
            className="form-input"
            type="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            name="password"
            id="password"
            className="form-input"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            className="form-input"
            type="password"
            placeholder="Confirmar Contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            checked={formData.terminos}
            onChange={handleChange}
            required
          />
          <label htmlFor="terminos">Acepto los términos y condiciones</label>
        </div>
        <button type="submit" className="btn-primary">
          <i className="fas fa-user-plus"></i> Crear Cuenta
        </button>
      </form>
      <div className="auth-footer">
        <p>
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="auth-link">
            Inicia sesión aquí
          </a>
        </p>
        <p>
          <a href="/" className="auth-link">
            Volver al inicio
          </a>
        </p>
      </div>
    </div>
  );
}


