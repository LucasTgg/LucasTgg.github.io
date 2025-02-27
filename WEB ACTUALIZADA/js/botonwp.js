// Seleccionamos el botón de WhatsApp
const botonWA = document.getElementById("botonWA");

// Función para activar la animación de rebote
function activarRebote() {
    botonWA.style.animation = "rebote 1s ease-in-out";
    
    // Quitamos la animación después de 1 segundo para que se repita cada 30s sin quedarse activada
    setTimeout(() => {
        botonWA.style.animation = "none";
    }, 1000);
}

// Ejecutamos la animación cada 30 segundos
setInterval(activarRebote, 2000);
