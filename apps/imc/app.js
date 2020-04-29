let $altura = document.querySelector('#altura');
let $peso = document.querySelector('#peso');
let $button = document.querySelector('button');

function update(){
    let altura = Number($altura.value);
    let peso = Number($peso.value);
    let imcResult = peso / (altura * altura);

    let elementos = document.querySelectorAll('#imc');
    for (let i=0; i<elementos.length; i++){
        elementos[i].innerText = imcResult;
    }
}

$button.addEventListener('click', update);