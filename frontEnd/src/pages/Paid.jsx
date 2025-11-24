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
        <div className="container">
            <div className="header">
                <h1>Pago Seguro</h1>
            </div>

            <div className="content">
                {/* IZQUIERDA */}
                <div className="left">
                    <h3>Selecciona tu medio de pago:</h3>

                    <div className="payment-option">
                        <img src="https://cdn-icons-png.flaticon.com/512/483/483947.png" className="icon" alt="tarjeta" />
                        <div>
                            <strong>Tarjetas</strong><br />
                            Crédito, Débito, Prepago
                        </div>
                    </div>

                    <div className="payment-option">
                        <img src="https://cdn-icons-png.flaticon.com/512/709/709790.png" className="icon" alt="onepay" />
                        <div>
                            <strong>Onepay</strong><br />
                            y otras billeteras digitales
                        </div>
                    </div>

                    <a href="#" className="cancelar">Anular compra y volver</a>
                </div>

                {/* DERECHA */}
                <div className="right">
                    <h3>Ingresa los datos de tu tarjeta:</h3>

                    <label>Número de tarjeta</label>
                    <h3>total: ${clp(total)} </h3>
                    <div className="input-card">
                        <span className="card-icon">💳</span>
                        <input type="number" placeholder="XXXX XXXX XXXX XXXX" />
                    </div>

                    <div className="error">Ingresa un número de tarjeta</div>

                    <button className="btn" onClick={enviarVenta}>Continuar</button>

                    <div className="logos">
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

