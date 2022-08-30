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

const muncul1 = document.querySelector('#muncul1');
const munculitem1 = document.querySelector('#munculitem1');
muncul1.addEventListener('mouseenter', function () {
    munculitem1.classList.remove('invisible');
    munculitem1.classList.remove('-rotate-[150deg]');
    munculitem1.classList.remove('-translate-x-20');
    munculitem1.classList.remove('blur-sm');

});
muncul1.addEventListener('mouseleave', function () {
    munculitem1.classList.add('invisible');
    munculitem1.classList.add('-rotate-[150deg]');
    munculitem1.classList.add('-translate-x-20');
    munculitem1.classList.add('blur-sm');

});

const muncul2 = document.querySelector('#muncul2');
const munculitem2 = document.querySelector('#munculitem2');
muncul2.addEventListener('mouseenter', function () {
    munculitem2.classList.remove('invisible');
    munculitem2.classList.remove('-rotate-[150deg]');
    munculitem2.classList.remove('-translate-x-20');
    munculitem2.classList.remove('blur-sm');

});
muncul2.addEventListener('mouseleave', function () {
    munculitem2.classList.add('invisible');
    munculitem2.classList.add('-rotate-[150deg]');
    munculitem2.classList.add('-translate-x-20');
    munculitem2.classList.add('blur-sm');
});

const muncul3 = document.querySelector('#muncul3');
const munculitem3 = document.querySelector('#munculitem3');
muncul3.addEventListener('mouseenter', function () {
    munculitem3.classList.remove('invisible');
    munculitem3.classList.remove('-rotate-[150deg]');
    munculitem3.classList.remove('-translate-x-20');
    munculitem3.classList.remove('blur-sm');

});
muncul3.addEventListener('mouseleave', function () {
    munculitem3.classList.add('invisible');
    munculitem3.classList.add('-rotate-[150deg]');
    munculitem3.classList.add('-translate-x-20');
    munculitem3.classList.add('blur-sm');

});

const muncul4 = document.querySelector('#muncul4');
const munculitem4 = document.querySelector('#munculitem4');
muncul4.addEventListener('mouseenter', function () {
    munculitem4.classList.remove('invisible');
    munculitem4.classList.remove('-rotate-[150deg]');
    munculitem4.classList.remove('-translate-x-20');
    munculitem4.classList.remove('blur-sm');

});
muncul4.addEventListener('mouseleave', function () {
    munculitem4.classList.add('invisible');
    munculitem4.classList.add('-rotate-[150deg]');
    munculitem4.classList.add('-translate-x-20');
    munculitem4.classList.add('blur-sm');

});