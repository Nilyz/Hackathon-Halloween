const nombre = document.getElementById('nombre');
const btn = document.getElementById('btnEmpezar');

function getName() {
    const nombreJugador = nombre.value;
    localStorage.setItem("nombreJugador", nombreJugador); 
}

btn.addEventListener('click', () => {
    getName();
    showName(); 
});

function showName() {
    const nombreJugador = localStorage.getItem("nombreJugador"); 
    console.log(nombreJugador);
}
