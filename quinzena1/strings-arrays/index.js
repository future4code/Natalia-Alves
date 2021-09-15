//SEMANA 1 AULA 5

//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCICIO 1
// Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

/* No primeiro o console imprimirá a. undefined; no segundo imprimirá b. null ; no terceiro imprimira c. 11 ; 
no quarto imprimirá d. 3 ; no quinto imprimirá e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] ; no sexto imprimirá f. 9 */

// EXERCICIO 2

//Leia o código abaixo com atenção 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

/* A FRASE SERÁ IMPRESSA COM O COMPRIMENTO QUE É 27*/




//EXERCICIOS DE ESCRITA DE CODIGO

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

const nomeDoUsuario = prompt ("Qual seu nome?")
const emailDoUsuario = prompt ("Qual seu email?")

const frase = "O e-mail " +  emailDoUsuario +  " foi cadastrado com sucesso. Seja bem vinda(o), " +  nomeDoUsuario

console.log (frase)


// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:

/*a) Imprima na tela o array completo

b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista*/

const minhasComidasFavoritas = ["Poke", "Chilli", "Lasanha", "Macarrão", "Carangueijo"]

console.log ("a." , minhasComidasFavoritas)

console.log ("b." , "Essas são minhas comidas favoritas")
let i = 0
console.log ( minhasComidasFavoritas [i])
console.log (minhasComidasFavoritas [i+1])
console.log (minhasComidasFavoritas [i+2])
console.log (minhasComidasFavoritas [i+3])
console.log (minhasComidasFavoritas [i+4])

const comidaFavoritaDoUsuario = prompt ("Qual sua comida favorita?")

let minhasComidasFavoritasNova = ["Poke" , comidaFavoritaDoUsuario , "Lasanha" , "Macarrão" , "Carangueijo"]

console.log ("c.", minhasComidasFavoritasNova)



/*3. Faça um programa, seguindo os passos:
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array na tela
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array na tela*/

const listaDeTarefas = []

let tarefaUm = prompt ("Insira uma tarefa para hoje")
listaDeTarefas.push(tarefaUm.toString())
let tarefaDois = prompt ("Insira uma tarefa para hoje")
listaDeTarefas.push(tarefaDois.toString())
let tarefaTres = prompt ("Insira uma tarefa para hoje")
listaDeTarefas.push(tarefaTres.toString())

console.log (listaDeTarefas)

let tarefaConcluida = prompt ("Insira o indice de uma tarefa Concluida ( 0, 1 ou 2)")
tarefaExcluir = Number (tarefaConcluida)
listaDeTarefas.splice(tarefaExcluir,1)

console.log (listaDeTarefas)


//DESAFIOS

//Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

let frase = prompt ("Insira uma frase")
const listaFrase = []
listaFrase.push(frase.split(''))

console.log (listaFrase)

// Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"] 
//faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array


const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

let frutaCoroa = arrayFrutas.indexOf("Abacaxi")

console.log (frutaCoroa)
console.log (arrayFrutas.length)