// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
// escreva seu código aqui
const alturaTexto = prompt ("Insira o valor da altura do retângulo")
const larguraTexto = prompt ("Insira o valor da largura do retângulo")
const altura = Number(alturaTexto)
const largura = Number(larguraTexto)
const areaRetangulo = altura * largura
console.log (areaRetangulo)
}



// Exercício 2
function imprimeIdade(idadeUsuario) {
  // escreva seu código aqui
  let anoAtualTexto = prompt ("Em que ano estamos?")
  let anoNascimentoTexto = prompt ("Em que ano você nasceu?")
  let anoAtual = Number (anoAtualTexto)
  let anoNascimento = Number (anoNascimentoTexto)

  idadeUsuario = anoAtual - anoNascimento

  console.log (idadeUsuario)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let pesoTexto = prompt ("Digite seu peso em quilos:")
  let alturaTexto = prompt ("Digite sua altura em metros")
  let peso = Number (pesoTexto)
  let altura = Number (alturaTexto)

  let alturaQuadrada = altura * altura
  let IMC = peso / alturaQuadrada

  console.log (IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt ("Qual seu nome?")
  const idade = prompt ("Quantos anos você tem?")
  const email = prompt ("Qual seu email?")

  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log (mensagem)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const coresFavoritas = []

  let cor1 = prompt ("Insira uma cor favorita")
  coresFavoritas.push(cor1.toString())
  let cor2 = prompt ("Insira mais uma cor favorita")
  coresFavoritas.push(cor2.toString())
  let cor3 = prompt ("Insira mais uma cor favorita")
  coresFavoritas.push(cor3.toString())

  console.log (coresFavoritas)

}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  let fraseMinuscula = prompt ("Digite uma frase em letras minúsculas")
  let fraseMaiuscula = fraseMinuscula.toUpperCase()

  console.log (fraseMaiuscula)

}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  let valorDoEspetaculo = prompt ("Digite o custo para a realização do espetáculo")
  let valorDoIngresso = prompt ("Digite o valor dos ingressos do espetáculo")
  let quantosIngressosDevemSerVendidos = valorDoEspetaculo / valorDoIngresso

  console.log (quantosIngressosDevemSerVendidos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  let primeiraPalavra = prompt ("Digite uma palavra")
  let segundaPalavra = prompt ("Digite outra palavra")
  let primeiraPalavraTamanho = primeiraPalavra.length
  let segundaPalavraTamanho = segundaPalavra.length
  let comparacaoTamanho = primeiraPalavraTamanho === segundaPalavraTamanho

  console.log (comparacaoTamanho)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  let primeiraPalavra = prompt ("Digite uma palavra")
  let segundaPalavra = prompt ("Digite outra palavra")
  let primeiraPalavraMaiuscula = primeiraPalavra.toUpperCase()
  let segundaPalavraMaiuscula = segundaPalavra.toUpperCase()
  let comparacaoPalavras = primeiraPalavraMaiuscula === segundaPalavraMaiuscula

  console.log (comparacaoPalavras)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtualRgTexto = prompt ("Em que ano estamos?")
  let anoNascimentoRgTexto = prompt ("Em que ano você nasceu?")
  let anoEmissaoRgTexto = prompt ("Em que ano seu RG foi emitido?")
  let anoAtualRg = Number (anoAtualRgTexto)
  let anoNascimentoRg = Number (anoNascimentoRgTexto)
  let anoEmissaoRg = Number (anoEmissaoRgTexto)

  let calculoIdade = anoAtualRg - anoNascimentoRg 
  let tempoDeEmissaoRg = anoAtualRg - anoEmissaoRg
  let qualIdadeVinte = calculoIdade <= 20 && tempoDeEmissaoRg >= 5
  let qualIdadeCinquenta = calculoIdade > 20 && calculoIdade <= 50 && tempoDeEmissaoRg >= 10
  let qualIdadeMaisCinquenta = calculoIdade > 50 && tempoDeEmissaoRg > 15
  let testeIdades = qualIdadeVinte || qualIdadeCinquenta || qualIdadeMaisCinquenta
  console.log (testeIdades)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  let anoInseridoPeloUsuarioTexto = prompt ("Digite o valor de um ano")
  let anoInseridoPeloUsuario = Number (anoInseridoPeloUsuarioTexto)
  let calculoAnoQuatrocentos = anoInseridoPeloUsuario%400 === 0
  let calculoAnoQuatro = anoInseridoPeloUsuario%4 === 0
  let calculoAnoCem = anoInseridoPeloUsuario%100 === 0
  let calculoAnoBissexto = calculoAnoQuatrocentos === calculoAnoQuatro === calculoAnoCem
  console.log (calculoAnoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  let idadeAluno = prompt ("Responda com sim ou não: Você tem mais de dezoito anos?")
  let escolaridadeAluno = prompt ("Responda com sim ou não: Você possui ensino médio completo?")
  let disponibilidadeHorario = prompt ("Responda com sim ou não: Você possui disponibilidade exclusiva no horário do curso?")
  let validaIdade = idadeAluno.toLowerCase() === "sim"
  let validaEscolaridade = escolaridadeAluno.toLowerCase() === "sim"
  let validaHorario = disponibilidadeHorario.toLowerCase() === "sim"
  console.log (validaIdade === validaEscolaridade === validaHorario)
}