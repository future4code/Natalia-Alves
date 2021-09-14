//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

//EXERCICIO 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
/*NO TESTE A. NO CONSOLE SERA IMPRESSO FALSE. NO TESTE B.
NO CONSOLE SERÁ IMPRESSO FALSE. NO TESTE C. SERÁ IMPRESSO FALSE.
NO TESTE D. ELE VAI IMPRIMIR QUE O RESULTADO É BOOLEANA.*/



//EXERCICIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

/*O PROBLEMA NO PROGRAMA QUE FOI ESCRITO É QUE QUALQUER DADO QUE INSERIMOS EM UMA CAIXA DE DIALOGO É ENCARADO COMO STRING
LOGO O RESULTADO IMPRESSO NO CONSOLE É O DOS NUMEROS QUE FORAM DIGITADOS PELO USUÁRIO JUNTOS, MAS NÃO SOMADOS*/



//EXERCICIO 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
umNumero = Number (primeiroNumero)
doisNumero = Number (segundoNumero)

const resultado = umNumero + doisNumero

console.log(resultado)

/*O PROGRAMA ACIMA É A SOLUÇÃO PARA QUE O PROGRAMA REALIZE A SOMA DOS NÚMEROS QUE FORAM DIGITADOS PELO USUARIO
NA CAIXA DE DIALOGO*/


//EXERCICIO DE ESCRITA DE CODIGO

//EXERCICIO 1

let idadeUsuario = prompt ("Qual a sua idade?")
let idadeAmigoUsuario = prompt ("Qual a idade do seu melhor amigo?")

idadeUsuarioNumero = Number (idadeUsuario)
idadeAmigoUsuarioNumero = Number (idadeAmigoUsuario)

idadeMaior = idadeUsuarioNumero > idadeAmigoUsuarioNumero
idadeDiferença = idadeUsuarioNumero - idadeAmigoUsuarioNumero

console.log ("Sua idade é maior do que do seu melhor amigo?", idadeMaior, idadeDiferença)


//EXERCICIO 2

let numeroParTexto = prompt ("Digite um número par:")
numeroPar = Number (numeroParTexto)

Divisão = numeroPar%2

console.log(Divisão)

/*O PADRÃO É QUE O RESTO DA DIVISÃO SERÁ SEMPRE 0. SE O USUÁRIO INSERIR UM NUMERO IMPAR O RESTO DA DIVISÃO SERÁ
SEMPRE 1.*/


//EXERCICIO 3

let idadeUsuarioTexto = prompt ("Quantos anos você tem?")
idadeUsuario = Number (idadeUsuarioTexto)

idadeUsuarioMeses = idadeUsuario * 12
idadeUsuarioDias = idadeUsuario * 365,25
idadeUsuarioHoras = idadeUsuario * 8766

console.log ("Sua idade equivale a", idadeUsuarioMeses, "meses" , idadeUsuarioDias, "dias" , idadeUsuarioHoras, "horas")


//EXERCICIO 4

let primeiroNumeroTexto = prompt ("Digite um número:")
let segundoNumeroTexto = prompt ("Digite outro número:")

primeiroNumero = Number (primeiroNumeroTexto)
segundoNumero = Number (segundoNumeroTexto)

numeroMaior = primeiroNumero > segundoNumero
console.log(numeroMaior)
numeroIgual = primeiroNumero === segundoNumero
console.log(numeroIgual)
numeroDivisivel = primeiroNumero%segundoNumero
numeroResto = numeroDivisivel === 0
console.log (numeroResto)
numeroDivisivelDois = segundoNumero%primeiroNumero
numeroRestoDois = numeroDivisivelDois === 0
console.log (numeroRestoDois)

