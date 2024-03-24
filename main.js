document.addEventListener('DOMContentLoaded', function () {
    var partsSwiper = new Swiper('.parts-slider', {
        // Configuración del carrusel
        slidesPerView: 1, // Número de slides visibles a la vez
        spaceBetween: 20, // Espacio entre los slides
        loop: true, // Hacer el carrusel en bucle
        direction: 'horizontal', // Orientación horizontal

        // Paginación del carrusel
        pagination: {
            el: '.swiper-pagination', // Selector de la paginación
            clickable: true, // Permitir clic en la paginación para navegar
        },
        
        // Navegación con flechas
        navigation: {
            nextEl: '.swiper-button-next', // Selector de la flecha derecha
            prevEl: '.swiper-button-prev', // Selector de la flecha izquierda
        },
    });

    let search = document.querySelector('.search-box');

    document.querySelector('#search-icon').onclick = ()  => {
        search.classList.toggle('active');
        menu.classList.remove('active');
    }

    let menu = document.querySelector('.navbar');

    document.querySelector('#menu-icon').onclick = ()  => {
        menu.classList.toggle('active');
        search.classList.remove('active');
    }

    // Ocultar menú y caja de búsqueda al desplazarse
    window.onscroll = () => {
        menu.classList.remove('active');
        search.classList.remove('active');
    }

    // Cambiar la sombra del header al hacer scroll
    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
});


$(document).ready(function(){
    $('.dropdown-toggle').mousedown(function(e){
        console.log("Clic en enlace");
        e.preventDefault(); // Evita que el enlace se active
        $('.dropdown').removeClass('active'); // Oculta otras listas desplegables
        $(this).parent('.dropdown').toggleClass('active'); // Agrega o quita la clase 'active' al elemento padre
        if ($(this).parent('.dropdown').hasClass('autos')) { // Si se hace clic en el enlace "AUTOS"
            $(this).next('.dropdown-content').toggle(); // Mostrar u ocultar la lista desplegable de autos
        }
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.dropdown.autos').length) {
            $('.dropdown.autos').removeClass('active');
            $('.dropdown.autos .dropdown-content').hide();
        }
    });
});
