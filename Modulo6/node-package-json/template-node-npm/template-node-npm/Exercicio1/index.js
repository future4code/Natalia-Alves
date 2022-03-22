//EXERCICIO 1
// A) UTILIZAMOS O COMANDO PROCESS.ARGV

//B)

// const nome = process.argv [2]
// const idade = process.argv [3]

// const mensagem = `Olá, ${nome}! Você tem ${idade} anos.`
// console.log(mensagem)

//C)

const nome = process.argv [2]
const idade = Number(process.argv [3])
const soma = idade + 7

const mensagem = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${soma}`
console.log(mensagem)