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
        textBox.innerText = "¡Oh no! ¡Son larvas! ¡Qué asco!";
    }else if(contenedor===2){
        content__img.src="../img/rata.gif";
        textBox.innerText = "¡Oh no! ¡Es una rata! ¡Qué asco!";
    }else if(contenedor===3){
        content__img.src="../img/cadaver.gif";
        textBox.innerText = "¡Oh no! ¡Es un cadáver! ¡Qué asco!";
    }else if(contenedor===4){
        content__img.src="../img/llave.png";
        keyy.href="../index.html";
        textBox.innerText = "LO ENCONTRE!!, Volvamos a la puerta principal";
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