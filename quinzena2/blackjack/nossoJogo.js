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

console.log("Boas vindas ao jogo de Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
	let cartaJogadorUm = comprarCarta()
   let cartaJogadorDois = comprarCarta()
   let cartaMaquinaUm = comprarCarta()
   let cartaMaquinaDois = comprarCarta()

   let pontuacaoDoJogador = cartaJogadorUm.valor + cartaJogadorDois.valor
   let pontuacaoDaMaquina = cartaMaquinaUm.valor + cartaMaquinaDois.valor

   console.log (`Jogador - as cartas foram: ${cartaJogadorUm.texto} ${cartaJogadorDois.texto} - ${pontuacaoDoJogador}`)
   console.log(`Maquina - as cartas foram: ${cartaMaquinaUm.texto} ${cartaMaquinaDois.texto} - ${pontuacaoDaMaquina}`)

      if (pontuacaoDoJogador > pontuacaoDaMaquina) {
         console.log("O jogador ganhou!")
   } else if (pontuacaoDaMaquina > pontuacaoDoJogador) {
         console.log("A máquina ganhou!")
   } else if (pontuacaoDoJogador === pontuacaoDaMaquina) {
         console.log("Empate!")
   }

} else {
	console.log ("O jogo acabou!")

}