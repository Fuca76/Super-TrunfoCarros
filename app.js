var carta1 = {
    // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswqMH9S2FW93IlW8Gh4bUpjWJuOS6yp3pEg&usqp=CAU",
     nome:"MacQueen" ,
     atributos:{
       Velocidade: 207,
       Tamanho: 54,
       Humor: 9,
       Coragem:49
     }
   };
   
   var carta2 = {
    // img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKXdolHb5dpcRoXGXitw0Dfd2IQwY14Cr_Wi-BfxpkbMUN3ql6v4NUBu8PYqjpvn2tww&usqp=CAU",
     nome:"Trator" ,
     atributos:{
      Velocidade: 28,
       Tamanho: 17,
       Humor: 4,
       Coragem:26
     }
   };
   
   var carta3 = {
     //img:"https://i.pinimg.com/originals/7e/3e/d9/7e3ed9d6a0bcdf742f99d6a33862c564.webp",
     nome:"Mate" ,
     atributos:{
     Velocidade: 82,
       Tamanho: 56,
       Humor: 10,
       Coragem:40
     }
   };
   
   
   var cartas = [carta1 ,carta2 , carta3];
   var cartaMaquina;
   var cartaJogador;
   
   function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 3);
     cartaMaquina = cartas[numeroCartaMaquina];
     console.log(cartaMaquina);
     
     var numeroCartaJogador = parseInt (Math.random() *3);
    while (numeroCartaMaquina == numeroCartaJogador) {
       numeroCartaJogador = parseInt(Math.random() *3);
     }
     cartaJogador = cartas[numeroCartaJogador];
     console.log(cartaJogador);
     
     document.getElementById("btnSortear").disabled = true;
   document.getElementById("btnJogar").disabled = false;
     
    exibirOpcoes() 
   }
     function exibirOpcoes() {
     var opcoes = document.getElementById("opcoes")
     var opcoesTexto = "";
     
     //para percorrer cada um dos atributos
     for (var atributo in cartaJogador.atributos) {
       opcoesTexto += "<input type='radio' name = 'atributo' value ='" + atributo + "'>" + atributo;
     }
       opcoes.innerHTML = opcoesTexto;
   }
   
   
     function obtemAtributoSelecionado() {
       var radioAtributos = document.getElementsByName("atributo");
       
       for (var i = 0; i < radioAtributos.length; i++){
         if(radioAtributos[i].checked == true){
           return radioAtributos[i].value;
         }
       }
     }
   
   
   function jogar() {
     
     var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
     var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
     var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
     
     if(valorCartaJogador > valorCartaMaquina){
       elementoResultado.innerHTML = "Você venceu!"
     } else if (valorCartaMaquina > valorCartaJogador){
       elementoResultado.innerHTML = "Você perdeu , a carta da máquina é maior. "
     }else{
       elementoResultado.innerHTML = "Empatou"
     }
     console.log(cartaMaquina);
   }
   