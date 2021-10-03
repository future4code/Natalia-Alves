/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let jogador =[]
    let maquina = []
    
    if(confirm("Boas vindas ao jogo de Blackjack! Quer iniciar uma nova rodada?")) {
      let cartasIniciaisOk = false
      while (!cartasIniciaisOk){
         jogador.push(comprarCarta())
         jogador.push(comprarCarta())
         maquina.push(comprarCarta())
         maquina.push(comprarCarta())
         if ((jogador[0].valor === 11 && jogador[1].valor === 11) ||
         (maquina[0].valor === 11 && maquina[1].valor === 11)) {
            jogador = []
            maquina = []
      }else{
         cartasIniciaisOk = true
      }
   }

   let continuarComprando = true

   while (continuarComprando){
      let textos =""
      let pontos = 0
      for (let carta of jogador){
         textos += carta.texto + ""
         pontos += carta.valor 
      }
      if (pontos > 21){
         continuarComprando = false
      } else {
         let confirmaCompra = confirm(
            `Suas cartas são ${textos}. A carta revelada do computador é ${maquina[0].texto}.` +
            "\n"+ 
            "Deseja comprar mais uma carta?"
         )
      
         if (confirmaCompra){
            jogador.push(comprarCarta())
         } else {
            continuarComprando = false
         }
      }
   } 
   let pontuacaoDoJogador = 0
   let pontuacaoDaMaquina = 0
   let textosDoJogador = ""
   let textosDaMaquina = ""

   for (let carta of maquina){
      pontuacaoDaMaquina += carta.valor
      textosDaMaquina += carta.texto + " "
   }
   for (let carta of jogador){
      pontuacaoDoJogador += carta.valor
      textosDoJogador += carta.texto + " "
   }

   if (pontuacaoDoJogador <= 21){
      while (pontuacaoDaMaquina < pontuacaoDoJogador && pontuacaoDaMaquina <= 21){
         maquina.push(comprarCarta())
         pontuacaoDaMaquina = 0
         textosDaMaquina = ""
         for (let carta of maquina){
            pontuacaoDaMaquina += carta.valor
            textosDaMaquina += carta.texto + " "
         }
      }
   }

   let resultado = ""
   if (pontuacaoDoJogador > pontuacaoDaMaquina && pontuacaoDoJogador <= 21){
      resultado = "O usuário ganhou!"
   } else if (pontuacaoDaMaquina > pontuacaoDoJogador && pontuacaoDaMaquina <= 21){
      resultado = "O computador ganhou!"
   } else if (pontuacaoDaMaquina > 21 && pontuacaoDoJogador <= 21){
      resultado = "O usuário ganhou!"
   } else if (pontuacaoDoJogador > 21 && pontuacaoDaMaquina <= 21){
      resultado = "O computador ganhou!"
   } else {
      resultado = "Empate!"
   }

   
   alert( `Jogador - Cartas: ${textosDoJogador} - Pontuação: ${pontuacaoDoJogador}` + "\n" + 
      `Maquina - Cartas: ${textosDaMaquina} - Pontuação: ${pontuacaoDaMaquina}` + 
      "\n" + resultado)
    
    } else {
       alert ("O jogo acabou!") 
    }

