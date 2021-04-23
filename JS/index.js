const navIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav');
const body = document.querySelector("body")

navIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
    body.classList.toggle('active');
});