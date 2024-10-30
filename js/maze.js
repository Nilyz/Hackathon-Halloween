const laberinto =document.getElementById('maze');
const alert =document.getElementById('alert');


// Crear un canvas para verificar el color
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");


const COLOR_OBJETIVO = { r: 52, g: 58, b: 64 }; 

// Cargar la imagen en el canvas una vez que esté lista
laberinto.onload = () => {
    canvas.width = laberinto.width;
    canvas.height = laberinto.height;
    ctx.drawImage(laberinto, 0, 0, laberinto.width, laberinto.height);
};

// Función para verificar si el color de un píxel coincide con el color objetivo
function esColorObjetivo(x, y) {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    return (
        pixel[0] === COLOR_OBJETIVO.r &&
        pixel[1] === COLOR_OBJETIVO.g &&
        pixel[2] === COLOR_OBJETIVO.b
    );
}

// Detectar el movimiento del ratón sobre la imagen
laberinto.addEventListener("mousemove", (event) => {
    // Obtener la posición relativa del cursor en la imagen
    const rect = laberinto.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Verificar si el píxel en la posición es del color objetivo
    if (esColorObjetivo(x, y)) {
        mensaje.innerText = "¡Estás en el camino correcto!";
    } else {
        mensaje.innerText = "No estás sobre el color correcto.";
    }
});

// Detectar cuando el ratón sale de la imagen
laberinto.addEventListener("mouseleave", () => {
    mensaje.innerText = "Saliste del laberinto";
});
