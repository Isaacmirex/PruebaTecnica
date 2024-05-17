// Función para mostrar el menú desplegable al hacer clic en el botón
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const dropdownMenu = this.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  });
});
