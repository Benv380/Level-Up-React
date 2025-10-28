import React from 'react';
import '../css/Nosotros.css';

export default function Nosotros() {
    return (
        <section className="nosotros">
            <div className="nosotros-container">
                <div className="nosotros-texto">
                    <h1 className="titulo">Sobre Nosotros</h1>
                    <p className="descripcion">
                        <strong>Level-Up Gamer</strong> es una tienda online dedicada a satisfacer las necesidades de los
                        entusiastas de los videojuegos en Chile. Lanzada hace dos años como respuesta a la creciente
                        demanda durante la pandemia, Level-Up Gamer ofrece una amplia gama de productos para gamers,
                        desde consolas y accesorios hasta computadores y sillas especializadas. Aunque no contamos con
                        una ubicación física, realizamos despachos a todo el país.
                    </p>

                    <div className="mision-vision">
                        <div className="card">
                            <h2>Misión</h2>
                            <p>
                                Proporcionar productos de alta calidad para gamers en todo Chile, ofreciendo una experiencia
                                de compra única y personalizada, con un enfoque en la satisfacción del cliente y el crecimiento
                                de la comunidad gamer.
                            </p>
                        </div>

                        <div className="card">
                            <h2>Visión</h2>
                            <p>
                                Ser la tienda online líder en productos para gamers en Chile, reconocida por su innovación,
                                servicio al cliente excepcional, y un programa de fidelización basado en gamificación que
                                recompense a nuestros clientes más fieles.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="nosotros-imagen">
                    <img src="/assets/img/equipo-level-up.jpeg" alt="Equipo Level-Up Gamer" />
                </div>
            </div>
        </section>
    );
}
