const btnFlecha = document.querySelector ('.navbar-flechita');
const desktopMenu = document.querySelector ('.desktop-menu')

btnFlecha.addEventListener ('click', toggleDesktopMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle ('inactive');
}