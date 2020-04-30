let $horaMin = document.querySelector('#horaMin');
let $horaSeg = document.querySelector('#horaSeg');
let $buttonMin = document.querySelector('#calcMin');
let $buttonSeg = document.querySelector('#calcSeg');

function updateMin(){
    let horaMin = Number($horaMin.value);
    let resultMin = horaMin * 60;
    console.log("hora>> " + horaMin);
    console.log("minutos>> " + resultMin);

    let elementos = document.querySelectorAll('#resultMin');
    for (let i=0; i<elementos.length; i++){
        elementos[i].innerText = resultMin;
    }
}

function updateSeg(){
    let horaSeg = Number($horaSeg.value);
    let resultSeg = horaSeg * 3600;
    console.log("hora>> " + horaSeg);
    console.log("segundos>> " + resultSeg);

    let elementos = document.querySelectorAll('#resultSeg');
    for (let i=0; i<elementos.length; i++){
        elementos[i].innerText = resultSeg;
    }
}

$buttonSeg.addEventListener('click', updateSeg);
$buttonMin.addEventListener('click', updateMin);