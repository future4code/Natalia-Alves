const nome :string = process.argv [2]
const nascimento :string = (process.argv [3])
const separa = nascimento.split(" ", 3)

const mensagem :string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
console.log(mensagem)