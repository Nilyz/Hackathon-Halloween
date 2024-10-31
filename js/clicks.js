let clickCount = 0;
const puerta = document.getElementById("puerta");
const mensajeError = document.getElementById("mensajeError");
const pantallaCompleta = document.getElementById("pantallaCompleta");

// Agregar un evento de clic en todo el documento
document.addEventListener("click", (event) => {
    // Verificar si el clic ocurrió fuera de la puerta
    if (!puerta.contains(event.target)) {
        clickCount++;

        if (clickCount === 3) {
            // Mostrar mensaje de advertencia en la esquina superior derecha
            mensajeError.style.display = "block";
            mensajeError.textContent = "No puedo equivocarme más o me encontrará";

            setTimeout(() => {
                mensajeError.style.display = "none";
            }, 3000); // El mensaje desaparece después de 3 segundos
        }

        if (clickCount >= 6) {
            // Mostrar imagen de pantalla completa cuando los errores alcanzan 6
            pantallaCompleta.style.display = "block";
        }
    }
});
