const navIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav');

navIcon.addEventListener('click', () => {
    navBar.classList.toggle('active')
})