const app = document.querySelector('.app');
const header = document.querySelector('.header');
const topBar = document.querySelector('.topbar');
const iconSearch = document.querySelector('.icon__search');
const iconCart = document.querySelector('.icon__cart');
const iconMenu = document.querySelector('.header__action-menu');
const siteNav = document.querySelector('.site__nav');
const siteNavSearch = document.querySelector('.site__nav-search');
const siteNavCart = document.querySelector('.site__nav-cart');
const siteNavMenu = document.querySelector('.site__nav-menu');
const siteOverlay = document.querySelector('.site__overlay');
const siteClose = document.querySelector('.site__nav-close');
const iconSubnavLevel0 = document.querySelector('.menu__item > .icon__subnav');
const listIconSubnavLevel1 = document.querySelectorAll('.submenu2__level1 .icon__subnav');
const menuSubnavItemLevel0 = document.querySelector('.menu__item.has__sub');

setTimeout(function() {
    scrollTop();
}, 100);

function scrollTop() {
    document.onscroll = function() {
        const heightHeaderScroll = header.offsetHeight + topBar.offsetHeight;
        if(document.documentElement.scrollTop > heightHeaderScroll) {
            header.classList.add('header__scroll');
        } else {
            header.classList.remove('header__scroll');
        }
    }
};

iconSearch.onclick = function() {
    app.classList.add('sidebar__move');
    siteNav.classList.add('active');
    siteNavSearch.classList.add('active');
    siteOverlay.classList.add('active');
};

iconCart.onclick = function() {
    app.classList.add('sidebar__move');
    siteNav.classList.add('active');
    siteNavCart.classList.add('active');
    siteOverlay.classList.add('active');
};

iconMenu.addEventListener('click', function() {
    app.classList.add('sidebar__move');
    siteNav.classList.add('active');
    siteNavMenu.classList.add('active');
    siteOverlay.classList.add('active');
});

iconSubnavLevel0.onclick = function() {
    menuSubnavItemLevel0.classList.toggle('active');
    const subMenuDad = document.querySelector('.submenu2.subnav__dad');
    
    setTimeout(function() {
        if (subMenuDad.style.display === 'none') {
            subMenuDad.style.height = '0';
        } else {
            subMenuDad.style.height = 'auto';
        }
    }, 1000);
};

listIconSubnavLevel1.forEach(item => {
    item.addEventListener('click', function() {
        const subMenuLevel1 = this.closest('.submenu2__level1');
        subMenuLevel1.classList.toggle('active');
        
    })
});

siteOverlay.onclick = function() {
    app.classList.remove('sidebar__move');
    siteNav.classList.remove('active');
    siteNavSearch.classList.remove('active');
    siteNavCart.classList.remove('active');
    siteNavMenu.classList.remove('active');
    siteOverlay.classList.remove('active');
};

siteClose.onclick = function() {
    app.classList.remove('sidebar__move');
    siteNav.classList.remove('active');
    siteNavSearch.classList.remove('active');
    siteNavCart.classList.remove('active');
    siteNavMenu.classList.remove('active');
    siteOverlay.classList.remove('active');
};






// iconCart.onmouseenter = function() {
//     iconCart.style.animation = 'scrollIn 0.4s';
// }

// iconCart.onmouseleave = function() {
//     iconCart.style.animation = 'scrollOut 0.4s';
// }



$('.owl-carousel').owlCarousel({
    loop: true,
    // nav: true,
    dots: true,
    // autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

