let piadas,
    $piada = document.querySelector("#piada"),
    $btn = document.querySelector("button");

function getPiada(){
    let index = Math.floor(Math.random() * 9);
    $piada.innerText = piadas[index].value.joke;
}

(async function main() {
    let resp = await fetch("piadas.json");
    piadas = await resp.json();

    window.piadas = piadas;

    getPiada();

    $btn.addEventListener("click",getPiada);
    
}());


