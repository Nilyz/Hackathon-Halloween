
let llaveImg= document.getElementById("cont4");
let key=0;

function getKey() {
    key++;
    localStorage.setItem("key", key); 
}

llaveImg.addEventListener("click",getKey);