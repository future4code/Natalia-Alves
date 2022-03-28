// Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` 
// passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. 
// Este processo é chamado de **transpilação**. 
// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. 
// O `tsc` é o comando responsável por fazer a transpilação dos arquivos.
// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um 
// arquivo javascript?

// UTILIZARIA O COMANDO TSC PARA TRANSPILAR O CODIGO PARA JS E NODE PARA RODAR O CODIGO NO TERMINAL APOS A 
// TRANSPILAÇÃO.

// `exercicio-4.ts`

// ```tsx
// type pokemon = {
// 	name: string,
//   types: string,
// 	healthPoints: number
// }

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28
// }

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31
// }

// const pokemon3: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35
// }
// ```

// c) E se este arquivo estivesse dentro de uma pasta chamada `src`. 
// O processo seria diferente? Se sim, descreva as diferenças.

//COPIARIA O CODIGO PARA O ARQUIVO CRIADO NA EXTENSÃO TS, DENTRO DA PASTA SRC E TIPARIA AS VARIÁVEIS, 
//CRIARIA UMA PASTA CHAMADA BUILD E DEPOIS RODARIA O COMANDO NPM RUN START EXERCICIO-4.TS E 
// AUTOMATICAMENTE SERIA CRIADO UM ARQUIVO EXERCICIO-4.TS E UM JSON QUE TORNARIAM 
// POSSIVEL RODAR O CODIGO COM O COMANDO NPM E REALIZAR TESTES NO TERMINAL.

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// ESTANDO DENTRO DA PASTA DO PROJETO NO TERMINAL AO RODAR O COMANDO NPM START 