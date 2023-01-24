const btnFlecha = document.querySelector ('.navbar-flechita');
const desktopMenu = document.querySelector ('.desktop-menu');
const burguerMenu = document.querySelector ('.burguer-menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const menuOrdenesCarrito = document.querySelector ('.container-main-carrito-compra'); 


btnFlecha.addEventListener ('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);

function toggleDesktopMenu (){
    const isMenuOrdenesCarritoClose = menuOrdenesCarrito.classList.contains('inactive');

    if (!isMenuOrdenesCarritoClose){
        menuOrdenesCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuOrdenesCarritoClose = menuOrdenesCarrito.classList.contains('inactive');

    if (!isMenuOrdenesCarritoClose){
        menuOrdenesCarrito.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle ('inactive');
}

function toggleCarritoIcon(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add ('inactive');
    } else{
        if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive')
     }
    }

    menuOrdenesCarrito.classList.toggle('inactive');
}