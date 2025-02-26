const hiddenMenu = document.getElementById('menu-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        hiddenMenu.classList.add('show');
    } else {
        hiddenMenu.classList.remove('show');
    }
});