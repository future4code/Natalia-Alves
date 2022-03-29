import { type } from "os";

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
    nome: string,
    ano: number,
    genero: string,
    pontuacao?: number
}

const filme1 : filme = {
    nome: "Clube da Luta",
    ano: 1999,
    genero: "ação"
}

const filme2 : filme = {
    nome: "Capitão Fantástico",
    ano: 2016,
    genero: "comédia dramática",
    pontuacao: 83
}

console.log(filme1)
console.log(filme2)