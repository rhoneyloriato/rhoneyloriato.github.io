var player = null;
var comp = Math.round(Math.random() *2) ;

function init(){

	if(comp == player){
	document.getElementById("resultado").innerHTML = "Empate";
	}
	else if (player == 0 && comp ==1 ) {
	document.getElementById("resultado").innerHTML = "Voce perdeu";
	}
	else if (player == 0 && comp == 2 ) {
	document.getElementById("resultado").innerHTML = "Voce ganhou";
	}
	else if (player == 1 && comp == 0) {
	document.getElementById("resultado").innerHTML = "Voce ganhou";
	}
	else if (player == 1 && comp == 2 ) {
	document.getElementById("resultado").innerHTML = "Voce perdeu";
	}
	else if (player == 2 && comp == 0) {
	document.getElementById("resultado").innerHTML = "Voce perdeu";
	}
	else if (player == 2 && comp == 1) {
	document.getElementById("resultado").innerHTML = "Voce ganhou";
	}
	computador();
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

}