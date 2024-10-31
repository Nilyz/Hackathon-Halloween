
let llaveImg = document.getElementById("cont4");
let llaveCont = document.getElementById("llaves");

// Cargar el contador de llaves desde localStorage al cargar la página
function loadKeys() {
    let contLlaves = localStorage.getItem("key") ? parseInt(localStorage.getItem("key")) : 0;
    llaveCont.innerHTML = "Llaves: " + contLlaves; // Muestra el contador de llaves
}

// Función para incrementar el contador de llaves
function getKey() {
    // Cargar el contador actual de llaves
    let contLlaves = localStorage.getItem("key") ? parseInt(localStorage.getItem("key")) : 0;
    
    contLlaves++; // Incrementar el contador
    localStorage.setItem("key", contLlaves); // Guardar el nuevo valor en localStorage
    llaveCont.innerHTML = "Llaves: " + contLlaves; // Actualizar la interfaz
}

// Cargar las llaves al cargar la página
window.addEventListener('load', loadKeys);

// Asociar el evento de clic al elemento cont4
llaveImg.addEventListener("click", getKey);
