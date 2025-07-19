document.addEventListener('DOMContentLoaded', () => {
    // Código para actualizar el año en el footer
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Código para la fecha de última modificación
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;
    }
});