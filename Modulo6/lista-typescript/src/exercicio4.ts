type funcionario = {
    nome: string,
    salário: number,
    setor:string,
    presencial: boolean
}

enum SETOR {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO  = 'financeiro'
}

const listaFuncionários : Array <funcionario> =
[
	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
]

function filtroFuncionarios (funcionarios: Array<funcionario>) : Array<funcionario> {
    return funcionarios.filter((item) => {return item.setor  === SETOR.MARKETING && item.presencial === true})
}

console.log(filtroFuncionarios(listaFuncionários))