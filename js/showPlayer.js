let jugador= document.getElementById("jugador");
let llaveCont= document.getElementById("llaves");





function showName() {
    const nombreJugador = localStorage.getItem("nombreJugador");
    let contLlaves = localStorage.getItem("key") ? parseInt(localStorage.getItem("key")) : 0; // Cargar desde localStorage o iniciar en 0
    if (nombreJugador) {
        console.log("Jugador:", nombreJugador);
        console.log("Llaves:", contLlaves);
        
    }
    jugador.innerHTML = "Nombre: "+nombreJugador;
    llaveCont.innerHTML = "Llaves: " + contLlaves;
    
}


showName();

