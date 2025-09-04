document.addEventListener('DOMContentLoaded', () => {
    // Elementos del menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const closeMenu = document.querySelector('.close-menu');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    console.log('Elementos encontrados:', { menuToggle, closeMenu, mainNav, navLinks });

    // Función para abrir menú
    function openMenu() {
        console.log('Abriendo menú...');
        mainNav.classList.add('nav-open');
        menuToggle.classList.add('menu-open');
        document.body.classList.add('menu-open');
        console.log('Clases aplicadas:', mainNav.className);
    }

    // Función para cerrar menú
    function closeMenuFunc() {
        console.log('Cerrando menú...');
        mainNav.classList.remove('nav-open');
        menuToggle.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
    }

    // Toggle del menú hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Click en hamburguesa');
            openMenu();
        });
    }

    // Cerrar menú con botón X
    if (closeMenu) {
        closeMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Click en cerrar');
            closeMenuFunc();
        });
    }

    // Cerrar menú al hacer clic en un enlace (móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento de salto instantáneo por defecto
            e.preventDefault();

            // Cierra el menú móvil si está abierto
            closeMenuFunc();

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
            closeMenuFunc();
        }
    });

    // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenuFunc();
        }
    });
});