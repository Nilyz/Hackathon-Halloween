const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");
const cont4 = document.getElementById("cont4");
const message = document.getElementById("message");
const content__img= document.getElementById("content__img");
const keyy= document.getElementById("key");
const textBox = document.getElementById("textBox");

function showAlert(contenedor) {
    if(contenedor===1){
        content__img.src="../img/larvas.png";
        textBox.innerText = "¡Ugh! ¡Larvas! Esto es repugnante. Este lugar está lleno de descomposición.";
        larvas.play();
    }else if(contenedor===2){
        content__img.src="../img/rata.gif";
        textBox.innerText = "¡Qué asco! Una rata. ¿Qué demonios hace aquí? No me gusta este lugar...";
        ratas.play();
    }else if(contenedor===3){
        content__img.src="../img/cadaver.gif";
        textBox.innerText = "Siento que me va a dar un infarto. ¿Qué le ocurrió a esta persona? Esto no augura nada bueno.";
        cadaver.play();
    }else if(contenedor===4){
        content__img.src="../img/llave.png";
        keyy.href="../index.html";
        textBox.innerText = "LO ENCONTRE!!, Volvamos a la puerta principal";
        llavesS.play();
        llavesS.play();
    }
    message.style.display = "block";
    textBox.style.display = "block";
}
function closeAlert() {
    message.style.display = "none";
}
cont1.addEventListener("click", () => showAlert(1));
cont2.addEventListener("click", () => showAlert(2));
cont3.addEventListener("click", () => showAlert(3));
cont4.addEventListener("click", () => showAlert(4));
content__img.addEventListener("click", closeAlert);