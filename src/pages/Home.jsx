import react from 'react';
import '../css/Home.css';

export default function Home() {
    return (
        <div className="container-fluid py-4">
            <div className="row">


                <div className="col-lg-8 mb-3">
                    <div id="gameCarousel" className="carousel slide mx-auto" data-bs-ride="carousel"
                        data-bs-interval="5000">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="assets/img/Controlador xbox.jpeg" className="d-block w-100"
                                    alt="Mando Xbox Series Elite" />
                                <div className="carousel-caption">
                                    <h2 className="fw-bold">Controlador Inalámbrico Xbox Series X</h2>
                                    <p>Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta
                                        táctil mejorada. Compatible con consolas Xbox y PC.</p>
                                    <a href="#" className="btn btn-light me-2">Más información</a>
                                    <a href="#" className="btn btn-outline-light">+ Lista de deseos</a>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="assets/img/Catan.jpeg" className="d-block w-100" alt="Juego de mesa Catan" />
                                <div className="carousel-caption">
                                    <h2 className="fw-bold">Juego de mesa Catan</h2>
                                    <p>Un clásico juego de estrategia donde los jugadores compiten por colonizar y
                                        expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches
                                        de juego en familia o con amigos.</p>
                                    <a href="#" className="btn btn-light me-2">Más información</a>
                                    <a href="#" className="btn btn-outline-light">+ Lista de deseos</a>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <img src="assets/img/Playstation5.jpeg" className="d-block w-100" alt="Playstation5" />
                                <div className="carousel-caption">
                                    <h2 className="fw-bold">Ps5</h2>
                                    <p>La consola de última generación de Sony, que ofrece gráficos impresionantes y
                                        tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.</p>
                                    <a href="#" className="btn btn-light me-2">Más información</a>
                                    <a href="#" className="btn btn-outline-light">+ Lista de deseos</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Carcasonne.jpeg" className="d-block w-100"
                                    alt="Juego de mesa Carcassonne" />
                                <div className="carousel-caption">
                                    <h2 className="fw-bold">Juego de mesa Carcassonne</h2>
                                    <p>Construye un paisaje medieval mientras colocas tus fichas estratégicamente.</p>
                                    <a href="#" className="btn btn-light me-2">Más información</a>
                                    <a href="#" className="btn btn-outline-light">+ Lista de deseos</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="assets/img/Mouse gamer.jpeg" className="d-block w-100"
                                    alt="Mouse Gamer Logitech G502 HERO" />
                                <div className="carousel-caption">
                                    <h2 className="fw-bold">Mouse Gamer Logitech G502 HERO</h2>
                                    <p>Con sensor de alta precisión y botones personalizables, este mouse es ideal para
                                        gamers que buscan un control preciso y personalización.</p>
                                    <a href="#" className="btn btn-light me-2">Más información</a>
                                    <a href="#" className="btn btn-outline-light">+ Lista de deseos</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="d-flex flex-column gap-3">
                        <div className="sidebar-game active" data-bs-target="#gameCarousel" data-bs-slide-to="0">
                            <img src="assets/img/Controlador xbox.jpeg" alt="Controlador Xbox" />
                            <span className="ms-3">Xbox</span>
                        </div>
                        <div className="sidebar-game" data-bs-target="#gameCarousel" data-bs-slide-to="1">
                            <img src="assets/img/Catan.jpeg" alt="Catan" />
                            <span className="ms-3">Catan</span>
                        </div>
                        <div className="sidebar-game" data-bs-target="#gameCarousel" data-bs-slide-to="2">
                            <img src="assets/img/Playstation5.jpeg" alt="Playstation 5" />
                            <span className="ms-3">Ps5</span>
                        </div>
                        <div className="sidebar-game" data-bs-target="#gameCarousel" data-bs-slide-to="3">
                            <img src="assets/img/Carcasonne.jpeg" alt="Carcassonne" />
                            <span className="ms-3">Carcassonne</span>
                        </div>
                        <div className="sidebar-game" data-bs-target="#gameCarousel" data-bs-slide-to="4">
                            <img src="assets/img/Mouse gamer.jpeg" alt="Mouse Gamer" />
                            <span className="ms-3">Mouse</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="news">
                <h2 className="w-100 text-center mb-4" style={{color: "#39FF14"}}>Descubre lo nuevo</h2>

                {/* Noticia 1 */}
                <div className="card" style={{width: "18rem"}}>
                    <img src="assets/img/2 años LevelUp.png" className="card-img-top" alt="Noticia gamer 1" />
                    <div className="card-body">
                        <h5 className="card-title">La revolución gamer en Chile</h5>
                        <p className="card-text">Level-Up Gamer celebra dos años llevando lo mejor en consolas, accesorios y
                            computadores a todo el país. Sin tienda física, pero con envíos rápidos, seguimos creciendo
                            junto a la comunidad gamer chilena.</p>
                    </div>
                </div>

                {/* Noticia 2 */}
                <div className="card" style={{width: "18rem"}}>
                    <img src="assets/img/Canjea puntos.png" className="card-img-top" alt="Noticia gamer 2" />
                    <div className="card-body">
                        <h5 className="card-title">Gamificación y recompensas únicas</h5>
                        <p className="card-text">¿Sabías que puedes ganar puntos LevelUp en cada compra y canjearlos por
                            descuentos y productos exclusivos? Sube de nivel en nuestra tienda y disfruta beneficios
                            únicos.</p>
                    </div>
                </div>

                {/* Noticia 3 */}
                <div className="card" style={{width: "18rem"}}>
                    <img src="assets/img/Guias.png" className="card-img-top" alt="Noticia gamer 3" />
                    <div className="card-body">
                        <h5 className="card-title">Comunidad gamer en expansión</h5>
                        <p className="card-text">Más que una tienda, Level-Up Gamer es un espacio para compartir. Pronto
                            lanzaremos guías, reseñas y noticias para que mejores tu experiencia de juego y te mantengas
                            al día en el mundo gamer.</p>
                    </div>
                </div>

                {/* Noticia 4 */}
                <div className="card" style={{width: "18rem"}}>
                    <img src="assets/img/Catalogo.png" className="card-img-top" alt="Noticia gamer 4" />
                    <div className="card-body">
                        <h5 className="card-title">Tecnología y estilo para jugar mejor</h5>
                        <p className="card-text">Desde PCs gamers de alto rendimiento hasta sillas ergonómicas, nuestros
                            productos están diseñados para que disfrutes cada partida con comodidad, estilo y la máxima
                            potencia.</p>
                    </div>
                </div>
            </div>

            <div className="events">
                <div className="events">
                    <h2 className="w-100 text-center mb-4" style={{color: "#39FF14"}}>Eventos Destacados</h2>

                    {/* Tarjetas de eventos */}
                    <div style={{display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"}}>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="assets/img/Evento1.png" className="card-img-top" alt="Evento 1" />
                            <div className="card-body">
                                <h5 className="card-title">Gaming Fest Santiago</h5>
                                <p className="card-text">Un festival gamer en Movistar Arena con torneos y stands
                                    tecnológicos.</p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img src="assets/img/Evento2.png" className="card-img-top" alt="Evento 2" />
                            <div className="card-body">
                                <h5 className="card-title">Expo Gamer Valparaíso</h5>
                                <p className="card-text">El Parque Cultural de Valparaíso se llena de comunidad, cosplayers
                                    y gaming.</p>
                            </div>
                        </div>

                        <div className="card" style={{width: "18rem"}}>
                            <img src="assets/img/Evento3.png" className="card-img-top" alt="Evento 3" />
                            <div className="card-body">
                                <h5 className="card-title">Concepción Gaming Week</h5>
                                <p className="card-text">Mallplaza Trébol recibe lo último en juegos, consolas y torneos
                                    eSports.</p>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Mapa con ubicaciones */}
                    <div className="maps">
                        <h2 className="w-100 text-center mb-4" style={{color: "#39FF14"}}>Mapa de ubicaciones</h2>

                        {/* Movistar Arena, Santiago */}
                        <div className="mapa-evento">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.708662619468!2d-70.66382368479979!3d-33.462572580782105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c51b935c0c23%3A0xfe177137c9c9c6c8!2sMovistar%20Arena!5e0!3m2!1ses!2scl!4v1694155378000!5m2!1ses!2scl"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        {/* Mallplaza Trébol, Concepción */}
                        <div className="mapa-evento">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.708662619468!2d-73.0690384!3d-36.7918699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5745f460495%3A0x1bf5dd96a8168e34!2sMallplaza%20Tr%C3%A9bol!5e0!3m2!1ses!2scl!4v1694155378000!5m2!1ses!2scl"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className="mapa-evento">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.708662619468!2d-71.627491!3d-33.046250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c51b935c0c23%3A0xfe177137c9c9c6c8!2sParque%20Cultural%20de%20Valpara%C3%ADso!5e0!3m2!1ses!2scl!4v1694155378000!5m2!1ses!2scl"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                    </div>


                    <div id="opinionsCarousel" className="carousel slide opinions w-100" data-bs-ride="carousel"
                        data-bs-interval="3000">
                        <h2 className="text-center mb-4" style={{color: "#39FF14"}}>Opiniones de Nuestros Gamers</h2>
                        <div className="carousel-inner">


                            <div className="carousel-item active">
                                <div className="d-flex justify-content-center">
                                    <div className="card" style={{width: "22rem"}}>
                                        <img src="assets/img/Perfil1.jpg" className="card-img-top" alt="Usuario 1" />
                                        <div className="card-body">
                                            <p className="card-text">Excelente experiencia, el sitio es muy fácil de usar y
                                                encontré justo lo que necesitaba en pocos minutos. Sin duda volveré a
                                                comprar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="card" style={{width: "22rem"}}>
                                        <img src="assets/img/Perfil2.jpg" className="card-img-top" alt="Usuario 2" />
                                        <div className="card-body">
                                            <p className="card-text">La variedad de productos es impresionante, desde los
                                                últimos lanzamientos hasta clásicos retro. Me encanta poder encontrar
                                                todo en un solo lugar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="d-flex justify-content-center">
                                    <div className="card" style={{width: "22rem"}}>
                                        <img src="assets/img/Perfil3.jpg" className="card-img-top" alt="Usuario 3" />
                                        <div className="card-body">
                                            <p className="card-text">Muy satisfecho con el servicio técnico. Rápido,
                                                eficiente y con un trato excelente. 100% recomendado.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#opinionsCarousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark rounded-circle p-2"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#opinionsCarousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark rounded-circle p-2"
                                    aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
