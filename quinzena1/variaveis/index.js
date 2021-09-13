//EXERCICIO DE INTERPRETAÇÃO 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/*AO RODAR O CODIGO NO CONSOLE, ESTAMOS DEFININDO COM LET QUE SEUS 
VALORES PODEM MUDAR AO LONGO DO PROGRAMA, ENTÃO NA PRIMEIRA PASSAGEM
DO LOG SERÁ EXIBIDO O VALOR DE B QUE FOI PREVIAMENTE DEFINIDO COMO 10
DEPOIS O VALOR DELE FOI ALTERADO PARA 5 E AI AO RODAR O LOG NOVAMENTE
SERÁ EXIBIDO NO CONSOLE OS VALORES DE A E B QUE SÃO RESPECTIVAMENTE
10 E 5*/

//EXERCICIO DE INTERPRETAÇÃO 2
let aa = 10
let bb = 20
let cc
cc = aa
bb = cc
aa = bb

console.log(aa, bb, cc)

/*NESTE EXEMPLO DEFINIMOS VALORES PARA AS VARIAVEIS AA E BB ENQUANTO 
DEIXAMOS A VARIAVEL CC COMO INDEFINIDA, NO DECORRER DO PROGRAMA ATRIBUIMOS
NOVOS VALORES AS VARIAVEIS, LOGO CC PASSA A TER O VALOR DE AA (10), DEPOIS 
BB PASSA A TER O VALOR DE CC (QUE HAVIA TIDO SEU VALOR ATRIBUIDO COMO 10 
    COMO A VARIAVEL AA), POR ULTIMO ATRIBUIMOS O VALOR DA VARIÁVEL AA PARA 
    O VALOR DA VARIAVEL BB. LOGO. AO RODAR O LOG NO CONSOLE VAMOS
    VISUALIZAR AA=10, BB=10 E CC=10*/

//EXERCICIO DE INTERPRETAÇÃO 3
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/*O PROGRAMA ADQUIRE DADOS QUE SERÃO INSERIDOS PELO USUARIO, ATRAVES
DE UM PROMPT, NO PRIMEIRO CASO, A VARIAVEL PODERIA TER SIDO DECLARADA 
DA SEGUINTE FORMA: LET horasTrabalhadasDia. NO SEGUNDO CASO PODERIAMOS
DECLARAR COMO: LET pagamentoPorDia.*/

//EXERCICIO DE ESCRITA DE CODIGO

//EXERCICIO 1

let variavelNome 
let variavelIdadeTexto
let variavelIdadeNumero
typeof variavelNome
typeof variavelIdadeTexto /*ambas aparecem como variáveis undefined porque ainda
                        não tiveram valores atribuidos*/
/*O EXERCICIO NÃO RODA CORRETAMENTE COM AS LINHAS DE DECLARAÇÃO ACIMA QUE FIZ SEGUINDO OS PASSOS DO EXERCICIO. QUANDO
REMOVIDAS ELE RODA CORRETAMENTE*/

let variavelNome = prompt ("Qual seu nome?")
let variavelIdadeTexto = prompt ("Quantos anos você tem?")
console.log ("Olá!","Me chamo", variavelNome, "e tenho", variavelIdadeTexto, "anos")


//EXERCICIO 2

let primeiraPergunta = prompt ("Você está usando vermelho hoje?")
let segundaPergunta = prompt ("Você bebeu água hoje?")
let terceiraPergunta = prompt ("Você arrumou sua cama hoje?")

console.log ("Você está usando vermelho hoje?", primeiraPergunta)
console.log ("Você bebeu água hoje?", segundaPergunta)
console.log ("Você arrumou sua cama hoje?", terceiraPergunta)

//EXERCICIO 3


let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log (a, b)

