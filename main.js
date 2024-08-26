const menuIcon = document.querySelector('#nav-menu');
const menuPath = document.querySelector('#nav-menu path')
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')) {
        menuPath.setAttribute('d', 'M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z');
    } else {
        menuPath.setAttribute('d', 'M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z');
    }
});
