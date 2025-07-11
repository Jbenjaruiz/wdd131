document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('header nav');

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        // Cambia el ícono del botón
        if (nav.classList.contains('open')) {
            menuButton.textContent = '✖';
        } else {
            menuButton.textContent = '☰';
        }
    });

    // Código para el footer (sin cambios)
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
    }
});