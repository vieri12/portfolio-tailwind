//hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

const htmltype = document.querySelector('#htmltype'); 
const triger = document.querySelector('#triger');
const triger2 = document.querySelector('#triger2');
triger.addEventListener('click', function () {
    htmltype.classList.toggle('dark');
});
triger2.addEventListener('click', function () {
    htmltype.classList.toggle('dark');
});