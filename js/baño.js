const timerDisplay = document.getElementById("timer");
const clickCountDisplay = document.getElementById("clickCount");
const resultDisplay = document.getElementById("result");
const clickButton = document.getElementById("clickButton");

let timeLeft = 20;
let clickCount = 0;
let timer;

// Función que inicia el temporizador
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Función que verifica el resultado y muestra el mensaje final
function endGame() {
    // Desactivamos el botón de clic
    clickButton.disabled = true;

    if (clickCount >= 10) {
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = '<p>¡Conseguiste la llave!</p><img src="../img/llave.png" alt="Llave" id="llave">';
        
        // Añadimos el evento de clic a la llave para redirigir
        document.getElementById("llave").addEventListener("click", () => {
            window.location.href = "../html/jardin.html"; // Cambia "pagina-destino.html" por la URL deseada
        });
    } else {
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = '<img src="../img/monster.gif" alt="Perdiste" style="width:100vw; height:100vh;">';

        // Redirige después de que termine el GIF
        const monsterGif = resultDisplay.querySelector("img");
        monsterGif.addEventListener("load", () => {
            // Calcula el tiempo de duración del GIF y redirige al final
            const gifDuration = 3000; // Cambia esto al tiempo de duración en milisegundos
            setTimeout(() => {
                window.location.href = "../index.html";
            }, gifDuration);
        });
    }
}

// Función que incrementa el contador de clicks
function handleClick() {
    if (timeLeft > 0 && clickCount < 10) {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        
        // Si se alcanzan 10 clics, termina el juego exitosamente
        if (clickCount >= 10) {
            clearInterval(timer);
            endGame();
        }
    }
}

// Inicia el temporizador cuando la página carga y añade el evento de clic al botón
window.onload = () => {
    startTimer();
    clickButton.addEventListener("click", handleClick);
};
