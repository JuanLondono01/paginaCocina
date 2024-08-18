const menuIcon = document.querySelector('.nav-menu');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});