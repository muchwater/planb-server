'use strict';

const nav__toggle = document.querySelector('.nav__toggle');
const nav__menu = document.querySelector('.nav__menu');

nav__toggle.addEventListener('click', () => {
    nav__menu.classList.toggle('active');
});