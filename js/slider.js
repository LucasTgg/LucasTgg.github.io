const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const cards = document.querySelectorAll('.card');

let index = 0;
let interval;

// 🔄 Función para mover el slider automáticamente
function startAutoSlide() {
    interval = setInterval(() => {
        moveNext();
    }, 3000); // Cambia de tarjeta cada 3 segundos
}

// ➡️ Mover a la siguiente tarjeta
function moveNext() {
    if (index < cards.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlider();
}

// ⬅️ Mover a la tarjeta anterior
function movePrev() {
    if (index > 0) {
        index--;
    } else {
        index = cards.length - 1;
    }
    updateSlider();
}

// 🔄 Actualizar la posición del slider
function updateSlider() {
    slider.style.transform = `translateX(-${index * 320}px)`;
}

// 🎯 Mostrar/ocultar descripción al hacer clic en la tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        let desc = card.querySelector('.description');
        desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
    });
});

// 🎮 Controles manuales
nextButton.addEventListener('click', () => {
    clearInterval(interval); // Detener autoplay al usar manualmente
    moveNext();
    startAutoSlide();
});

prevButton.addEventListener('click', () => {
    clearInterval(interval);
    movePrev();
    startAutoSlide();
});

// 🚀 Iniciar autoplay al cargar la página
startAutoSlide();
