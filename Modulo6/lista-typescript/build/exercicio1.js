const nome = process.argv[2];
const nascimento = (process.argv[3]);
const separa = nascimento.split("/");
const mensagem = `Olá me chamo ${nome}, nasci no dia ${separa[0]} do mês de ${separa[1]} do ano de ${separa[2]}`;
console.log(mensagem);
//# sourceMappingURL=exercicio1.js.map