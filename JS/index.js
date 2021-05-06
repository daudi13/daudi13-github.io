const navIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav__link');


navIcon.addEventListener('click', () => {
    body.classList.toggle('active');
    navBar.classList.toggle('active');
});

navLinks.forEach(link => {
        link.addEventListener('click', () => {
            body.classList.remove('active');
            navBar.classList.remove('active');
        })
    })
