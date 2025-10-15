import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Solo esto es necesario
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function SideBar() {
    const carousel = document.getElementById('gameCarousel');
    const sidebarItems = document.querySelectorAll('.sidebar-game');

    if (carousel && sidebarItems.length) {
        // Cambia la clase activa del sidebar al cambiar el slide
        carousel.addEventListener('slide.bs.carousel', function (event) {
            sidebarItems.forEach(item => item.classList.remove('active'));
            sidebarItems[event.to].classList.add('active');
        });

        // Permite que al hacer clic en el sidebar, cambie el slide del carrusel
        sidebarItems.forEach((item, idx) => {
            item.addEventListener('click', function () {
                const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
                carouselInstance.to(idx);
            });
        });
    }
}

export { SideBar };