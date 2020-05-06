let estados,
	$estado = document.querySelector("#estado"),
	$resposta = document.querySelector("#resposta"),
	$result = document.querySelector("#result"),
	$buttonConfirm = document.querySelector("#confirma");
var $pontos = 0;
	
function start(){
	clear();
	fetch("estados.json").then(resolve => resolve.json()).then(statesJson => {
		estados = statesJson;
		update();
	});
	
}

let estadoAtual;
function update(){
	estadoAtual = getRandomState();
	document.querySelector("#estado").innerText = estadoAtual[1].nome;
	console.log(estadoAtual[0]);
}

function getRandomState(){
	var index = Math.trunc((Math.random() * estados.estados.length));
	return [index,estados.estados[index]];
}

function check(){
	if($resposta.value.toLowerCase() == estadoAtual[1].capital.toLowerCase()){
		$result.innerText = "Resposta correta!";
		$pontos += 1;
		estados.estados.splice(estadoAtual[0],1);
		clear();
		if(estados.estados.length){
			update();
		}
		
	}else if (estados.estados.length == 1){
		$result.innerText = "Jogo encerrado!\nvocê acertou "
		 + $pontos + " de 27";
		setTimeout(start,4000);
	}
	else{
		estados.estados.splice(estadoAtual[0],1);
		$result.innerText = "Resposta incorreta!"
		clear();
		update();
	}
}

function clear(){
	$resposta.value = "";
	setTimeout(function(){
		$result.innerText = "";
	},1000);
}

start();


