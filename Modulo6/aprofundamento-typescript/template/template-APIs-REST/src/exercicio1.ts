// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
// Tente atribuir um número a esta variável. O que acontece?
// const minhaString : string = "bananinha"

//AO ATRIBUIR UM VALOR NUMÉRICO A VARIÁVEL TIPO STRING ELA VAI ACUSAR UM ERRO POIS NÃO É O TIPO CORRRETO
//DECLARADO.


// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. 
//Como fazer para que essa variável também aceite strings? 
//Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

//PARA FAZER COM QUE A VARIÁVEL ACEITE MAIS DE UM TIPO DEVEMOS RECORRER AO USO DO RECURSO TYPE
//COM ELE DECLARAMOS OS TIPOS DE VARIÁVEIS QUE NOSSA VARIÁVEL ACEITARÁ E DEPOIS E CHAMAMOS A VARIÁVEL NO 
//CODIGO.



// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
// `nome`, que é uma string;
// `idade`, que é um número;
// `corFavorita`, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1 : Pessoa = {
    nome: "Palmirinha",
    idade: 80,
    corFavorita: "azul"
}

const pessoa2 : Pessoa = {
    nome: "Luffy",
    idade: 20,
    corFavorita: "vermelho"
}

const pessoa3 : Pessoa = {
    nome: "Elvis",
    idade: 32,
    corFavorita: "preto"
}

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. 
// Utilize um `enum` para isso.

enum corFavorita {
    VERMELHA = "vermelha",
    LARANJA = "laranja",
    AMARELA = "amarela",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul-escuro",
    VIOLETA = "violeta"
}

const pessoa4: Pessoa = {
    nome: "Zoro",
    idade: 20,
    corFavorita: corFavorita.VERDE
}