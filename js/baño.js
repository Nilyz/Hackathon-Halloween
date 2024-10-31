const timerDisplay = document.getElementById("timer");
const clickCountDisplay = document.getElementById("clickCount");
const resultDisplay = document.getElementById("result");
const clickButton = document.getElementById("clickButton");
const startMessageText = startMessage.querySelector("p"); // Selecciona el <p> dentro de startMessage


let timeLeft = 10;
let clickCount = 0;
let gameTimer;
let countdownTimer;

// Inicia el temporizador del juego cuando la cuenta regresiva termina
function startGame() {
    startMessage.style.display = "none"; // Oculta el mensaje de inicio
    clickButton.disabled = false; // Habilita el botón de clic

    // Inicia el temporizador del juego
    gameTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
}

function startCountdown() {
    let countdown = 5;
    startMessage.style.display = "block"; // Muestra el mensaje al iniciar la cuenta regresiva
    const startMessageText = startMessage.querySelector("p");

    countdownTimer = setInterval(() => {
        startMessageText.textContent = `El juego comenzará en ${countdown}`;
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownTimer);
            startGame();
        }
    }, 1000);
}



// Configura la espera inicial de 10 segundos antes de comenzar la cuenta regresiva
window.onload = () => {
    let waitTime = 10;

    // Temporizador para los primeros 10 segundos de espera
    const waitTimer = setInterval(() => {
        waitTime--;

        if (waitTime === 0) {
            clearInterval(waitTimer); // Detén la espera y comienza la cuenta regresiva
            startCountdown();
        }
    }, 1000);

    clickButton.addEventListener("click", handleClick);
};

// Función que verifica el resultado y muestra el mensaje final
function endGame() {
    clickButton.disabled = true;

    if (clickCount >= 10) {
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = '<p>¡Conseguiste la llave!</p><img src="../img/llave.png" alt="Llave" id="llave">';
        
        document.getElementById("llave").addEventListener("click", () => {
            window.location.href = "../html/jardin.html";
        });
    } else {
        resultDisplay.style.display = "block";
        resultDisplay.innerHTML = '<img src="../img/monster.gif" alt="Perdiste" style="width:100vw; height:100vh;">';

        const monsterGif = resultDisplay.querySelector("img");
        monsterGif.addEventListener("load", () => {
            const gifDuration = 3000; 
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
        
        if (clickCount >= 10) {
            clearInterval(gameTimer);
            endGame();
        }
    }
}
