//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

//1. Leia o código abaixo

```jsx
function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
```

//a) O que vai ser impresso no console?

//b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
//e `minhaFuncao(10)`? O que apareceria no console?

//RESPOSTA: A) 10 E 50
//RESPOSTA B) OS VALORES SERIAM ARMAZENADOS E NÃO SERIAM IMPRESSOS NA TELA

//2. Leia o código abaixo

```jsx
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```

//a. Explique o que essa função faz e qual é sua utilidade
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// i.   `Eu gosto de cenoura`
//ii.  `CENOURA é bom pra vista`
//iii. `Cenouras crescem na terra`

//RESPOSTA A) ESSA FUNÇÃO PADRONIZA O TEXTO, COLOCANDO EM LETRAS MINUSCULAS E CHECA A EXISTENCIA
//DAS PALAVRAS DESEJADAS NO TEXTO DO USUÁRIO.
//B) true / true / true


//EXERCICIOS DE ESCRITA DE CODIGO

//1. Escreva as funções explicadas abaixo:

//a) A função não deve receber nenhum parâmetro e deve 
//imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função 
//não possui entradas, apenas imprime essa mensagem.

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//Exemplo
//Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
//`"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

//a)

function fraseInformacoesPessoais(frase){
console.log (frase)
}

fraseInformacoesPessoais("Eu sou Natalia, tenho 31 anos, moro em Mauá e sou tecnica de calibração")

//b) 

function fraseInformacoesPessoaisPreenchimento (fraseUsuario){

console.log (fraseUsuario)
}

let nomeUsuario = prompt ("Qual seu nome?")
let idadeUsuario = prompt ("Quantos anos você tem?")
let endereçoUsuario = prompt ("Qual seu endereço?")
let profissãoUsuario = prompt ("Qual sua profissão?")
fraseInformacoesPessoaisPreenchimento ("Eu sou " + nomeUsuario + ", tenho  " + idadeUsuario +  "  anos, moro em  " + endereçoUsuario  +  "  e sou  " + profissãoUsuario)



//2. Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das 
//duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro 
//número é **maior ou igual** ao segundo.
//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa 
//mensagem, juntamente com uma versão dela em letras maiúsculas.

//RESOLUÇÃO ITENS A, B E C

const doisNumeros = function (numeroUm, numeroDois) {

const soma = numeroUm + numeroDois
const booleano = numeroUm > numeroDois
const booleanoUmPar = numeroUm % 2
const umPar = booleanoUmPar === 0
console.log (soma)
console.log (booleano)
console.log (umPar)


}

let numeroUmTexto = prompt ("Digite um Número")
let numeroDoisTexto = prompt ("Digite outro Número")
let numeroUm = Number(numeroUmTexto)
let numeroDois = Number(numeroDoisTexto)

const doisNumerosSoma =  doisNumeros (numeroUm, numeroDois)


//RESOLUÇÃO ITEM D

let textoDoUsuario = prompt ("Digite uma mensagem")

const recebeMensagemUsuario = function (mensagemDigitada){
return mensagemDigitada.toUpperCase()
     
    
}

const impressãoDaFrase = recebeMensagemUsuario (textoDoUsuario)
console.log (impressãoDaFrase)
console.log (impressãoDaFrase.lenght)


//3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão).
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
//pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
    //Números inseridos: 30 e 3
    //Soma: 33
    //Diferença: 27
    //Multiplicação: 90
    //Divisão: 10
    

    let valorUmUsuarioTexto = prompt ("Digite um valor")
    let valorDoisUsuarioTexto = prompt ("Digite outro valor")
    let valorUmUsuario = Number (valorUmUsuarioTexto)
    let valorDoisUsuario = Number (valorDoisUsuarioTexto)

    const operaçãoSoma = function (numeroUm, numeroDois){
        const soma = numeroUm + numeroDois
        console.log ("Soma:", soma)
    }

    const operaçãoSubtração = function (numeroUm, numeroDois){
        const subtração = numeroUm - numeroDois
        console.log ("Diferença: ", subtração)
    }

    const operaçãoMultiplicação = function (numeroUm, numeroDois){
        const multiplicação = numeroUm * numeroDois
        console.log ("Multiplicação: ", multiplicação)
    }


    const operaçãoDivisão = function (numeroUm, numeroDois){
        const divisão = numeroUm / numeroDois
        console.log ("Divisão: ", divisão)
    }

    console.log ("Numeros inseridos: ", valorUmUsuario, valorDoisUsuario)
    const calculoSoma = operaçãoSoma (valorUmUsuario, valorDoisUsuario)
    const calculoSubtração = operaçãoSubtração (valorUmUsuario, valorDoisUsuario)
    const calculoMultiplicação = operaçãoMultiplicação (valorUmUsuario, valorDoisUsuario)
    const calculoDivisão = operaçãoDivisão (valorUmUsuario, valorDoisUsuario)
    