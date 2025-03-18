function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const selectedPage = document.getElementById(pageId);
    
    if (!selectedPage || selectedPage.classList.contains('active')) return; // Evita recargar la misma página

    // Ocultar todas las páginas con una transición suave
    pages.forEach(page => {
        page.classList.remove('active'); 
    });

    // Pequeño retraso para aplicar la animación de entrada
    setTimeout(() => {
        selectedPage.classList.add('active');
    }, 100);
}

// Mostrar la página de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
