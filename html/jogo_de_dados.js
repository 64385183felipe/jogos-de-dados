document.getElementById("botao").addEventListener("click", function(){
	var jog1 = document.getElementById("nome_id").value;
	var jog2 = document.getElementById("nome2_id").value;

		if ( jog1 =="" || jog2 ==""){
		alert("Por favor preencha os dados!!");
		location.reload();
	}


// document.getElementById("J1").innerHTML =" Nickname: " + jog1;
// document.getElementById("J2").innerHTML =" Nickname: " + jog2;
});





	var pontuacao1 = 0;
	var pontuacao2 = 0;
		
			function getRandomInt(min,max){
				return Math.floor(Math.random() * (max - min + 1)) + min;
			}
			function sorteia(){
				var valor_dado=getRandomInt(1,6);
				if(valor_dado==1) document.getElementById("Img1").src="dado1.png";
					else if (valor_dado==2) document.getElementById("Img1").src="dado2.png";
						else if (valor_dado==3) document.getElementById("Img1").src="dado3.png";
							else if (valor_dado==4) document.getElementById("Img1").src="dado4.png";
								else if (valor_dado==5) document.getElementById("Img1").src="dado5.png";
									else document.getElementById("Img1").src="dado6.png";
			
				var valor_dado2=getRandomInt(1,6);
				if(valor_dado2==1) document.getElementById("Img2").src="dado1.png";
					else if (valor_dado2==2) document.getElementById("Img2").src="dado2.png";
						else if (valor_dado2==3) document.getElementById("Img2").src="dado3.png";
							else if (valor_dado2==4) document.getElementById("Img2").src="dado4.png";
								else if (valor_dado2==5) document.getElementById("Img2").src="dado5.png";
									else document.getElementById("Img2").src="dado6.png";

			
			if (valor_dado == valor_dado2){
				pontuacao1 = pontuacao1;
				pontuacao2 = pontuacao2;
			} else if (valor_dado < valor_dado2){
				pontuacao2 = pontuacao2 + 1;		
			} else {
				pontuacao1 = pontuacao1 + 1;
			}
			document.getElementById('pontuacao1').innerHTML= pontuacao1;
			document.getElementById('pontuacao2').innerHTML= pontuacao2;	


			if (pontuacao1 == 10){
				alert("Jogador 1 venceu");
				location.reload();
			} else if (pontuacao2 == 10){
				alert("Jogador 2 venceu");
				location.reload();
			}

			}
			
			function cadastrarjogadores () {
				var j1 = document.getElementById("nome_id").value;
				var j2 = document.getElementById("nome2_id").value;
				 document.getElementById("jogador1").innerHTML=j1;
				 document.getElementById("jogador2").innerHTML=j2;
				 if (j1=="" || j2==""){document.getElementById("jogo").style.display= "none";
				 }else document.getElementById("jogo").style.display= "block";
				
			}

			

			function reset(){
				document.getElementById("Img1").src="dado0.png";
				document.getElementById("Img2").src="dado0.png";

			}

			function Grande(imagen) {
				document.getElementById("bigImg").src=imagen.src;
			}