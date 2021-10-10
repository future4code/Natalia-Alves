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
  if (a !== b && b !== c){
    return 'Escaleno'
  }else if (a ===b && b == c){
    return 'Equilátero'
  }else{
    return 'Isósceles'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maiorNumero
  let menorNumero
  let maiorDivisivelPorMenor

  if (num1 > num2){
    maiorNumero = num1
    menorNumero = num2
  }else{
    maiorNumero = num2
    menorNumero = num1
  }
  maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
  const diferenca = maiorNumero - menorNumero
  
  return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca 
  }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let menorNumero = Infinity
  let maiorNumero = -Infinity
  let segundoMenorNumero = Infinity
  let segundoMaiorNumero = -Infinity
  let arraySegundoMaiorEMenor = []

  for (let i of array){
    if (i < menorNumero){
      menorNumero = i
    }
    if (i > maiorNumero){
      maiorNumero = i
    }
  }

  for (let i of array){
    if (i < segundoMenorNumero && i !== menorNumero){
      segundoMenorNumero = i
    }
    if (i > segundoMaiorNumero && i !== maiorNumero){
      segundoMaiorNumero = i
    }
   
  }
  arraySegundoMaiorEMenor.push(segundoMaiorNumero)
  arraySegundoMaiorEMenor.push(segundoMenorNumero)
  return arraySegundoMaiorEMenor
}

// EXERCÍCIO 11
function ordenaArray(array) {
 const comprimento = array.length
   for(let ultimaPosicao = comprimento-1 ; ultimaPosicao > 0 ; ultimaPosicao --){
     for (let i = 0 ; i < ultimaPosicao ; i++){
       if (array[i] > array [i+1]){
         [array [i], array [i+1]] = [array[i+1] , array[i]] 
       }
     }
   }
   return array
 

}

// EXERCÍCIO 12
function filmeFavorito() {

const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  let atoresEspaco = ""
  for (let i = 0;i < filme.atores.length;i++) {
    if (i === filme.atores.length - 1) {
      atoresEspaco += filme.atores[i]
    } else {
      atoresEspaco += filme.atores[i] + ", "
    }
  }

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresEspaco}.`
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
