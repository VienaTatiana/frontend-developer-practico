const btnFlecha = document.querySelector ('.navbar-flechita');
const desktopMenu = document.querySelector ('.desktop-menu');
const burguerMenu = document.querySelector ('.burguer-menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const menuOrdenesCarrito = document.querySelector ('.container-main-carrito-compra');
const cardsContainer = document.querySelector ('.card-container');
const SectionContainerProductList = document.querySelector ('.main-container');
const productDetailContainer = document.querySelector ('.product-detail');
const productDetailCloseIcon = document.querySelector ('.product-detail-close');


btnFlecha.addEventListener ('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);
productDetailCloseIcon.addEventListener ('click', closeProductDetailAside);

function toggleDesktopMenu (){
    const isMenuOrdenesCarritoClose = menuOrdenesCarrito.classList.contains('inactive');
    const isproductDetailContainerClose = productDetailContainer.classList.contains ('inactive');

    if (!isMenuOrdenesCarritoClose){
        menuOrdenesCarrito.classList.add('inactive');
    }

    if (!isproductDetailContainerClose){
        productDetailContainer.classList.add ('inactive');
    }

    desktopMenu.classList.toggle ('inactive');
}

function toggleMobileMenu(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuOrdenesCarritoClose = menuOrdenesCarrito.classList.contains('inactive');
    const isProductDetailContainerClose = productDetailContainer.classList.contains('inactive');

    if (!isMenuOrdenesCarritoClose){
        menuOrdenesCarrito.classList.add('inactive');
    }

    if (!isProductDetailContainerClose ){
        productDetailContainer.classList.add ('inactive');
    }
    
    mobileMenu.classList.toggle ('inactive');
}

function toggleCarritoIcon(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isProductDetailContainerClose = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add ('inactive');
    } else{
        if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive')
     }
    }

    if(!isProductDetailContainerClose){
        productDetailContainer.classList.add ('inactive');
    }

    menuOrdenesCarrito.classList.toggle('inactive');
}

function openProductDetailaside(){
    const isMenuOrdenesCarritoClose = menuOrdenesCarrito.classList.contains('inactive');
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMenuOrdenesCarritoClose){
        menuOrdenesCarrito.classList.add('inactive');
    } 

    if (!isMobileMenuClose){
        mobileMenu.classList.add ('inactive');
    }

    if (!isDesktopMenuClose ){
        desktopMenu.classList.add ('inactive');
    }

    productDetailContainer.classList.remove ('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add ('inactive');
}


const productList = [];
productList.push({
    name: 'cafe helado',
    price: 5,
    image: 'https://images.pexels.com/photos/12100691/pexels-photo-12100691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});

productList.push({
    name: 'horchata',
    price: 2.5,
    image: 'https://images.pexels.com/photos/12100691/pexels-photo-12100691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});

productList.push({
    name: 'ice-cream',
    price: 3,
    image: 'https://images.pexels.com/photos/12100691/pexels-photo-12100691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
});


for (product of productList) {

    const productCard = document.createElement ('div');
    productCard.classList.add ('product-card');

    const productImg = document.createElement ('img');
    productImg.setAttribute ('src', product.image);
    productImg.addEventListener ('click', openProductDetailaside);

    const productListInfo = document.createElement ('div');
    productListInfo.classList.add ('product-info');

    const productInfoDetail = document.createElement('div');
    
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement ('p');
    productName.innerText = product.name;

    productInfoDetail.append (productPrice, productName);

    const figureShoppingIcon = document.createElement ('figure');
    const productImgCart = document.createElement ('img');
    productImgCart.setAttribute ('src', './icons/bt_add_to_cart.svg');

    figureShoppingIcon.appendChild(productImgCart);

    productListInfo.append (productInfoDetail, figureShoppingIcon);

    productCard.append (productImg, productListInfo);

    cardsContainer.appendChild (productCard);

    SectionContainerProductList.appendChild(cardsContainer);
}