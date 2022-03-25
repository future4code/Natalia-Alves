// Observe a função a seguir, escrita em JavaScript:

// ```jsx
// function obterEstatisticas(numeros) {
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )
//     let soma = 0
//     for (let num of numeros) {
//         soma += num
//     }
//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
//     return estatisticas
// }
// ```

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a 
// tipagem desses parâmetros

// AS ENTRADAS SÃO DOIS NÚMEROS ESCOLHIDOS PELO USUÁRIO E A SAÍDA COLOCA ELES EM ORDEM DO MAIOR PARA O MENOR,
// DEPOIS DO MENOR PARA O MAIOR E POR FIM RETORNA A MÉDIA DOS VALORES DIGITADOS PELO USUÁRIO.

function obterEstatisticas(numeros: Array <number>) : {maior: number, menor: number, media: number} {
    const numerosOrdenados = numeros.sort(
        (a , b ) => a - b
    )
    let soma : number = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior : numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas 
}

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// AS VARIÁVEIS SÃO OS NUMEROS QUE É UM ARRAY DE NUMEROS E A SAÍDA DA FUNÇÃO QUE É UM OBJETO DE NÚMEROS.

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** 
// e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// type amostra = {
//     numeros: Array<number>,
//     obterEstatisticas: (numeros: number[])
// }
// const amostraDeIdades : amostra = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}

// }