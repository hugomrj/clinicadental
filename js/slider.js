window.addEventListener('load', function() {
    var slider = tns({
      container: '.slider',
      items: 1, // Mostrar 3 doctores en pantallas grandes
      slideBy: 'page',
      autoplay: true,
      controls: true,
      controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      nav: false,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 30,
      responsive: {
        768: {
          items: 3 // Solo mostrar un doctor en pantallas pequeñas
        }
      }      
    });
});
