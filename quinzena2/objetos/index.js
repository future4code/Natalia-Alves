// 1.  Leia o código abaixo

//     ```jsx
    // const filme = {
    // 	nome: "Auto da Compadecida", 
    // 	ano: 2000, 
    // 	elenco: [
    // 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    // 		"Virginia Cavendish"
    // 		], 
    // 	transmissoesHoje: [
    // 		{canal: "Telecine", horario: "21h"}, 
    // 		{canal: "Canal Brasil", horario: "19h"}, 
    // 		{canal: "Globo", horario: "14h"}
    // 		]
    // }

    // console.log(filme.elenco[0])
    // console.log(filme.elenco[filme.elenco.length - 1])
    // console.log(filme.transmissoesHoje[2])
//     ```

//     a) O que vai ser impresso no console? 
// RESPOSTA: No console serão impressos os seguintes dados: "Matheus Nachtergaele" ; "Virginia Cavendish" 
// e canal "Globo" horário "14h"

// 2. Leia o código abaixo

//     ```jsx
//     const cachorro = {
//     	nome: "Juca", 
//     	idade: 3, 
//     	raca: "SRD"
//     }

//     const gato = {...cachorro, nome: "Juba"}

//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
//     ```

//     a) O que vai ser impresso no console?

//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//RESPOSTA: a) No console será impresso em cachorro os dados que constam dentro do objeto, o nome, a idade e a raça
// em gato os dados de cachorro serão copiados, mas o nome será substituido por Juba, já em tartaruga os dados serão
//copiados também com a inclusão do fato de que as letras serão substituidas e ao inves de Juba, o nome será Jubo.
// b) essa sintaxe faz o spread da informação, ele copia a informação de um outro objeto sem ter que digitar tudo
//novamente.


// 3. Leia o código abaixo

//     ```jsx
//     function minhaFuncao(objeto, propriedade) {
//     	return objeto[propriedade]
//     }

//     const pessoa = {
//       nome: "Caio", 
//       idade: 23, 
//       backender: false
//     }

//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))
//     ```

//     a) O que vai ser impresso no console?

//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

//RESPOSTA: a) No console serão impressas as mensagens false porque a pessoa não é backender, então a função vai buscar 
//esse booleano e pra altura será undefined porque não há essa informação no objeto.

// 1. Resolva os passos a seguir: 

//     a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente
// **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo 
//abaixo**:** 

//     ```jsx
//     // Exemplo de entrada
//     const pessoa = {
//        nome: "Amanda", 
//        apelidos: ["Amandinha", "Mandinha", "Mandi"]
//     }

//     // Exemplo de saída
//     "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
//     ```

//     - 💡  Dica

//         Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será 
//executado!

//     b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma 
//nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

//     - 💡  Dica

//         Não lembra da sintaxe de espalhamento ou spread? Não tem problema!

//         Pode pesquisar a vontade! Nesse [link](https://blog.fellyph.com.br/javascript/spread-operator/) tem vários 
//exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora 💘

const pessoa = {
    nome: "Natalia",
    apelidos : ["Na", "Natizinha", "Nati"]
}

const novaPessoa ={
    ...pessoa,
    nome: "Elvis",
    apelidos : ["Elvoso", "Elvinhos", "Nene"]
}

function nomeApelidos() {
    const objetoPessoa = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`
    const objetoNovaPessoa = `Eu sou ${novaPessoa.nome}, mas pode me chamar de: ${novaPessoa.apelidos}`
    console.log (objetoPessoa)
    console.log(objetoNovaPessoa)
    
}
nomeApelidos(novaPessoa)


// 2. Resolva os passos a seguir: 

//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`
//     - Exemplo

//         ```jsx
//         const pessoa = {
//         	nome: "Bruno", 
//           idade: 23, 
//         	profissao: "Instrutor"
//         }

//         minhaFuncao(pessoa)

//         // Retorno: ["Bruno", 5, 23, "Instrutor", 9]
//         ```

const pessoa1 = {
    nome: "Natalia" ,
    idade: 31,
    profissão: "Tecnica de calibração"
}

const pessoa2 = {
    nome: "Elvis" ,
    idade: 31 , 
    profissão: "Vendedor Técnico",
}

function pessoasArray() {
    arrayPessoa1 = []
    arrayPessoa1.push(pessoa1.nome.toString())
    arrayPessoa1.push(pessoa1.nome.toString().length)
    arrayPessoa1.push (pessoa1.idade.toString())
    arrayPessoa1.push(pessoa1.profissão.toString())
    arrayPessoa1.push (pessoa1.profissão.toString().length)
    console.log(arrayPessoa1)
      
}

pessoasArray(pessoa1)

// 3. Resolva os passos a seguir: 

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

//  b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
//nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//  c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`.
// Invoque essa função passando os três objetos criados. 

//     - 💡  Dica
//         Aqui você deve usar o método **push()**
//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
//     - 💡  Dica
//         Deve aparecer algo assim no console do seu navegador:
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png]
//(https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d281f8fc-0f7c-48fb-8bc3-7d58a22c3757/Captura_de_Tela_2021-05-05_s_15.47.27.png)
//         Se voce clicar nessa setinha, o array é expandido e deve parecer com isso:
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png]
//(https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99cd6642-12d3-46c6-96dc-43a6569d001d/arr.png)

let carrinho = []

const fruta1 ={
    nome: "banana",
    disponibilidade: true
}

const fruta2 = {
    nome: "laranja",
    disponibilidade: true
}

const fruta3 = {
    nome: "morango",
    disponibilidade: true
}

function preencherCarrinho (){
    console.log(carrinho)
}

preencherCarrinho(carrinho.push (fruta1), carrinho.push (fruta2), carrinho.push (fruta3))
