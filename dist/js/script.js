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
    munculitem1.classList.remove('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');


});
muncul1.addEventListener('mouseleave', function () {
    munculitem1.classList.add('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');
});

const muncul2 = document.querySelector('#muncul2');
const munculitem2 = document.querySelector('#munculitem2');
muncul2.addEventListener('mouseenter', function () {
    munculitem2.classList.remove('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');

});
muncul2.addEventListener('mouseleave', function () {
    munculitem2.classList.add('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');
});

const muncul3 = document.querySelector('#muncul3');
const munculitem3 = document.querySelector('#munculitem3');
muncul3.addEventListener('mouseenter', function () {
    munculitem3.classList.remove('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');

});
muncul3.addEventListener('mouseleave', function () {
    munculitem3.classList.add('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');

});

const muncul4 = document.querySelector('#muncul4');
const munculitem4 = document.querySelector('#munculitem4');
muncul4.addEventListener('mouseenter', function () {
    munculitem4.classList.remove('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');

});
muncul4.addEventListener('mouseleave', function () {
    munculitem4.classList.add('invisible', '-rotate-[150deg]', '-translate-x-20', 'blur-sm');

});

const data1 = document.querySelector('#data1');
const data2 = document.querySelector('#data2');
const arrowleft = document.querySelector('#arrowleft');
const arrowright = document.querySelector('#arrowright');

arrowleft.addEventListener('click', function () {
    arrowleft.classList.remove('lg:visible');
    arrowleft.classList.add('lg:invisible', 'lg:translate-x-72', 'lg:scale-50');
    arrowright.classList.remove('lg:invisible', 'lg:-translate-x-72', 'lg:scale-50');
    arrowright.classList.add('lg:visible');
    data1.classList.toggle('lg:invisible');
    data1.classList.remove('lg:-translate-x-72', 'lg:scale-50');
    data2.classList.toggle('lg:invisible');
    data2.classList.add('lg:translate-x-72', 'lg:scale-50');
});
arrowright.addEventListener('click', function () {
    arrowleft.classList.add('lg:visible');
    arrowleft.classList.remove('lg:invisible', 'lg:translate-x-72', 'lg:scale-50');
    arrowright.classList.add('lg:invisible', 'lg:-translate-x-72', 'lg:scale-50');
    arrowright.classList.remove('lg:visible');
    data1.classList.toggle('lg:invisible');
    data1.classList.add('lg:-translate-x-72', 'lg:scale-50');
    data2.classList.toggle('lg:invisible');
    data2.classList.remove('lg:translate-x-72', 'lg:scale-50');
});