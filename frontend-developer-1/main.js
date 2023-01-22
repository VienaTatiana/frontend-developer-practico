const btnFlecha = document.querySelector ('.navbar-flechita');
const desktopMenu = document.querySelector ('.desktop-menu');
const burguerMenu = document.querySelector ('.burguer-menu');
const mobileMenu = document.querySelector ('.mobile-menu');

btnFlecha.addEventListener ('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle ('inactive');
}