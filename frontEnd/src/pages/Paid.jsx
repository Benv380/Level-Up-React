import React, { useEffect, useState } from "react";
import "../css/Paid.css";
import { useAuth } from "../components/context/authContext";

export default function Paid() {
    const { user } = useAuth();

    async function enviarVenta() {
        try {
            // 1️⃣ Obtener usuario
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                alert("No estás logueado");
                return;
            }

            const idUsuario = user.id_usuario;

            // 2️⃣ Obtener carrito
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            if (cart.length === 0) {
                alert("El carrito está vacío");
                return;
            }

            // 3️⃣ Armar JSON para el backend
            const venta = {
                idUsuario: idUsuario,
                total: cart.reduce(
                    (acc, item) => acc + Number(String(item.precio).replace(/\./g, "")) * Number(item.cantidad),
                    0
                ),
                metodoPago: "WEBPAY",
                detalle: cart.map(item => ({
                    idProducto: item.id,
                    cantidad: Number(item.cantidad),
                    precioUnitario: (total)
                }))
            };

            console.log("📦 Enviando venta:", venta);

            // 4️⃣ Enviar al back
            const resp = await fetch("http://localhost:8083/ventas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(venta)
            });

            console.log("RESPUESTA BACKEND >>>", resp.status);
            const texto = await resp.text();
            console.log("BODY BACKEND >>>", texto);

            if (!resp.ok) {
                throw new Error("No se pudo registrar la venta");
            }

            // 5️⃣ Limpiar carrito
            localStorage.removeItem("cart");

            // 6️⃣ Redirigir a página de éxito
            alert("Venta registrada con éxito");
            window.location.href = "/success";

        } catch (error) {
            console.error("❌ Error al enviar venta:", error);
            alert("Error al registrar la venta");
        }
    }



    const [cartItems] = useState(() => {
        const items = JSON.parse(localStorage.getItem("cart")) || [];
        return items.map((item) => ({ ...item, cantidad: item.cantidad || 1 }));
    });

    const clp = (n) => Number(n || 0).toLocaleString("es-CL");
    const total = cartItems.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

    return (
    <div className="pago-container">
        <div className="pago-header">
            <div>
                <h1 className="pago-titulo">Pago Seguro</h1>
                <p className="pago-subtitulo">Selecciona tu medio de pago:</p>
            </div>
        </div>

        <div className="pago-content">
            {/* IZQUIERDA */}
            <div className="pago-left">
                <h3>Medios de pago</h3>

                <div className="pago-option">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/483/483947.png"
                        className="pago-icon"
                        alt="tarjeta"
                    />
                    <div>
                        <strong>Tarjetas</strong><br />
                        Crédito, Débito, Prepago
                    </div>
                </div>

                <div className="pago-option">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/709/709790.png"
                        className="pago-icon"
                        alt="onepay"
                    />
                    <div>
                        <strong>Onepay</strong><br />
                        y otras billeteras digitales
                    </div>
                </div>

                <a href="#" className="pago-cancelar">Anular compra y volver</a>
            </div>

            {/* DERECHA */}
            <div className="pago-right">
                <h3>Ingresa los datos de tu tarjeta:</h3>

                <label className="pago-label">Número de tarjeta</label>
                <p className="pago-total">total: ${clp(total)}</p>

                <div className="pago-input">
                    <span className="pago-card-icon">💳</span>
                    <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
                </div>

                <div className="pago-error">Ingresa un número de tarjeta</div>

                <button className="pago-btn" onClick={enviarVenta}>Continuar</button>

                <div className="pago-logos">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="American Express" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Red_Compra_logo.png" alt="Red Compra" />
                </div>
            </div>
        </div>
    </div>
);

}

