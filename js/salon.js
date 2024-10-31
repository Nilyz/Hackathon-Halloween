let keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Z", "X", "C", "V", "B", "N", "M"]; // Teclas posibles
let score = 0;
let fails = 0;
let currentKey = "";
let timeLeft = 3;
let timerInterval;

const quickTimeEvent = document.getElementById("quickTimeEvent");
const keyPrompt = document.getElementById("keyPrompt");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const gameOver = document.getElementById("gameOver");
const resultDisplay = document.getElementById("result");

function startGame() {
    console.log("Juego iniciado");
    generateKey();
    timerInterval = setInterval(countdown, 1000);
}

function generateKey() {
    currentKey = keys[Math.floor(Math.random() * keys.length)];
    keyPrompt.textContent = `Presiona: ${currentKey}`;
    timeLeft = 3;
    timer.textContent = timeLeft;
    console.log(`Nueva tecla generada: ${currentKey}`);
}

function countdown() {
    timeLeft--;
    timer.textContent = timeLeft;
    console.log(`Tiempo restante: ${timeLeft}s`);

    if (timeLeft <= 0) {
        fails++;
        updateScore();
        checkGameOver();
        generateKey();
    }
}

function updateScore() {
    scoreDisplay.textContent = `Aciertos: ${score} | Fallos: ${fails}`;
    console.log(`Aciertos: ${score}, Fallos: ${fails}`);
}

function checkGameOver() {
    if (fails >= 5) {
        clearInterval(timerInterval);
        gameOver.style.display = "flex";
        const gameOverImage = gameOver.querySelector("img");
        gameOverImage.style.display = "block"; // Asegura que la imagen esté visible
        console.log("Juego terminado: demasiados fallos");
    }
}

function checkWin() {
    if (score >= 20) {
        clearInterval(timerInterval);
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = '<p>¡Conseguiste la llave!</p><img src="../img/llave.png" alt="Llave" id="llave">';
        
        document.getElementById("llave").addEventListener("click", () => {
            window.location.href = "../html/jardin.html";
        });
        console.log("¡Ganaste el juego!");
    }
}

document.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key.toUpperCase()}`);
    if (event.key.toUpperCase() === currentKey) {
        score++;
        updateScore();
        checkWin();
        generateKey();
    } else {
        fails++;
        updateScore();
        checkGameOver();
        generateKey();
    }
});

// Iniciar el juego
startGame();
