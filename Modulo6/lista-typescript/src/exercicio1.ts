const nome :string = process.argv [2]
const nascimento :string = (process.argv [3])
const separa: Array<string> = nascimento.split("/")

const mensagem :string = `Olá me chamo ${nome}, nasci no dia ${separa[0]} do mês de ${separa[1]} do ano de ${separa[2]}`
console.log(mensagem)