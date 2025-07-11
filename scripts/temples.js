document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.getElementById('nav-links');

    if (menuButton && navLinks) {
        menuButton.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            if (navLinks.classList.contains('open')) {
                menuButton.textContent = '✖'; 
            } else {
                menuButton.textContent = '☰';
            }
        });

        // Cierra el menú al hacer clic fuera (solo en móvil)
        document.addEventListener('click', (e) => {
            if (
                window.innerWidth < 700 &&
                !menuButton.contains(e.target) &&
                !navLinks.contains(e.target)
            ) {
                navLinks.classList.remove('open');
                menuButton.textContent = '☰';
            }
        });

        // Asegura que el menú esté visible y el botón oculto en escritorio al redimensionar
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 700) {
                navLinks.classList.add('open');
                menuButton.textContent = '☰';
            } else {
                navLinks.classList.remove('open');
                menuButton.textContent = '☰';
            }
        });
    }

    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        const lastModDate = new Date(document.lastModified);
        const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const formattedDate = lastModDate.toLocaleDateString("es-GT", optionsDate);
        const formattedTime = lastModDate.toLocaleTimeString("en-US", optionsTime);
        lastModifiedParagraph.textContent = `Last Update: ${formattedDate} ${formattedTime}`;
    }
});