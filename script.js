document.addEventListener('DOMContentLoaded', () => {
    // Elementos del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('nav-open');
        menuToggle.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    });

    // Cerrar menú al hacer clic en un enlace (móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento de salto instantáneo por defecto
            e.preventDefault();

            // Cierra el menú móvil si está abierto
            mainNav.classList.remove('nav-open');
            menuToggle.classList.remove('menu-open');
            document.body.classList.remove('menu-open');

            // Obtiene el ID del objetivo desde el atributo href del enlace
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Realiza el desplazamiento suave hacia el elemento objetivo
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            mainNav.classList.remove('nav-open');
            menuToggle.classList.remove('menu-open');
            document.body.classList.remove('menu-open');
        }
    });

    // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('nav-open');
            menuToggle.classList.remove('menu-open');
            document.body.classList.remove('menu-open');
        }
    });
});