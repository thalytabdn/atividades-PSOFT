let cores,
	$cor = document.querySelector("#cor"),
	$resposta = document.querySelector("#resposta"),
	$result = document.querySelector("#result"),
	$buttonConfirm = document.querySelector("#confirma");
var $pontos = 0;
	
function start(){
	clear();
	fetch("colors.json").then(resolve => resolve.json()).then(colorsJson => {
		cores = colorsJson;
		update();
	});
	
}

let corAtual;
function update(){
	corAtual = getRandomColor();
	document.querySelector("#cor").innerText = corAtual[1].pt;
	console.log(corAtual[0]);
}

function getRandomColor(){
	var index = Math.trunc((Math.random() * cores.colors.length));
	return [index,cores.colors[index]];
}

function check(){
    
	if($resposta.value.toLowerCase() == corAtual[1].en.toLowerCase()){
		$result.innerText = "Resposta correta!";
		$pontos += 1;
		cores.colors.splice(corAtual[0],1);
		clear();
		if(cores.colors.length){
			update();
		}
		
	}else if (cores.colors.length == 1){
		$result.innerText = "Jogo encerrado!\nvocê acertou "
		 + $pontos + " de " + cores.colors.length;
		setTimeout(start,4000);
	}
	else{
		cores.colors.splice(corAtual[0],1);
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
