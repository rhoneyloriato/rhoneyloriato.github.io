var player = null;
var comp = Math.round(Math.random() *2) ;
var vitoria = 0;
var perdeu = 0;
function init(){
		
		comp = Math.round(Math.random() *2) ;
		computador();
		if(comp == player){
			document.getElementById("resultado").innerHTML = "Empate";
		}
		else if (player == 0 && comp ==1 ) {
			perdeu ++;
			document.getElementById("resultado").innerHTML = "Voce perdeu";
			document.getElementById("derrota").innerHTML = "Derrotas: " + perdeu
		}
		else if (player == 0 && comp == 2 ) {
			 vitoria ++
			document.getElementById("resultado").innerHTML = "Voce ganhou";
			document.getElementById("vitoria").innerHTML = "Vitorias: " + vitoria;
		}
		else if (player == 1 && comp == 0) {
			 vitoria ++
			document.getElementById("resultado").innerHTML = "Voce ganhou";
			document.getElementById("vitoria").innerHTML = "Vitorias: " + vitoria;
		}
		else if (player == 1 && comp == 2 ) {
			perdeu ++;
			document.getElementById("resultado").innerHTML = "Voce perdeu";
			document.getElementById("derrota").innerHTML = "Derrotas: " + perdeu;
		}
		else if (player == 2 && comp == 0) {
			perdeu ++;
			document.getElementById("resultado").innerHTML = "Voce perdeu";
			document.getElementById("derrota").innerHTML = "Derrotas: " + perdeu;
		}
		else if (player == 2 && comp == 1) {
			vitoria ++
			document.getElementById("resultado").innerHTML = "Voce ganhou";
			document.getElementById("vitoria").innerHTML = "Vitorias: " + vitoria;
		}
			
}

function computador(){
		
	if(comp == "0"){
			document.getElementById("pedra2").style.display = 'inline-block';
			document.getElementById("papel2").style.display = 'none';
			document.getElementById("tesoura2").style.display = 'none';	
	}
	else if(comp == "1"){
			document.getElementById("papel2").style.display = 'inline-block';
			document.getElementById("pedra2").style.display = 'none';
			document.getElementById("tesoura2").style.display = 'none';	
	}
	else if(comp == "2"){
			document.getElementById("tesoura2").style.display = 'inline-block';
			document.getElementById("papel2").style.display = 'none';
			document.getElementById("pedra2").style.display = 'none';
	}
}

function selecionar(p){

	player = p;
	if(p == "0"){
		document.getElementById("pedra").style.display = 'inline-block';
		document.getElementById("papel").style.display = 'none';
		document.getElementById("tesoura").style.display = 'none';	
	}
	else if(p == "1"){
		document.getElementById("papel").style.display = 'inline-block';
		document.getElementById("pedra").style.display = 'none';
		document.getElementById("tesoura").style.display = 'none';	
	}
	else if(p == "2"){
		document.getElementById("tesoura").style.display = 'inline-block';
		document.getElementById("papel").style.display = 'none';
		document.getElementById("pedra").style.display = 'none';
	}
	init();
}
function zerar()
{
	perdeu  = 0;
	vitoria = 0;
	document.getElementById("derrota").innerHTML = "Derrotas: " + perdeu ;
	document.getElementById("vitoria").innerHTML = "Vitorias: " + vitoria;
}
