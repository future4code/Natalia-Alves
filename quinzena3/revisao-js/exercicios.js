// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertida = []
  for (let i = array.length-1 ; i >= 0 ; i--){
    arrayInvertida.push(array[i])     
  }
  return arrayInvertida
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let pares = function(item) {
    return item % 2 === 0
    }
  let quadrados = function(item) {
    return Math.pow(item, 2)
    }
    let numerosQuadrados = array.filter (pares). map (quadrados)
    
    return numerosQuadrados
}


// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let pares = function(item) {
    return item % 2 === 0
    }
    let numerosPares = array.filter (pares)
    return numerosPares
}


// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let i = 0
let maiorNumero = -Infinity
while(i < array.length){
  if (array[i] > maiorNumero){
    maiorNumero = array[i]
  }
  i++
}
return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
  
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
 let respostas = []
 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3 
 itemUm = false
 itemDois = false
// a) `booleano1 && booleano2 && !booleano4` 
// b) `(booleano1 && booleano2) || !booleano3` 
// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)` 
// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)` 
// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
if (booleano1 && booleano2 && !booleano4){
  itemUm = true 
}else{
  respostas.push (itemUm)
}
if ((booleano1 && booleano2) || !booleano3){
  itemDois = true  
}else{
  respostas.push(itemDois)
}
if ((booleano2 || booleano3) && (booleano4 || booleano1)){
  itemTres =true
  respostas.push(itemTres)
}
if(!(booleano2 && booleano3) || !(booleano1 && booleano3)){
  itemQuatro = true
  respostas.push(itemQuatro)
}
if(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)){
  itemCinco = true
  respostas.push(itemCinco)
}

return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
    const novoArrayPares = [];
    for(let numero = 0; novoArrayPares.length < n; numero++) {
     if(numero % 2 === 0) {
       novoArrayPares.push(number)
     }
    }
    return novoArrayPares
   }

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
