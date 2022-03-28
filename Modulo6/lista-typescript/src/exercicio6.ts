type saldoCliente = {
	cliente: string,
	saldoTotal: number,
	debitos: Array <number>
}

const listaClientes: Array <saldoCliente> =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function clientesParaEmprestimo (lista: Array <saldoCliente>): Array <saldoCliente> {

	const novaListaClientes : Array <saldoCliente> = lista.map ((cliente) =>{
		let debitos : number = 0

		for (let i = 0; i < cliente.debitos.length ; i++) {
			debitos += cliente.debitos[i]
		}
		cliente ["saldoTotal"] -= debitos
		return cliente
	})

	const emprestimoAprovado : Array <saldoCliente> = novaListaClientes
	.filter((cliente) => {
		return cliente.saldoTotal < 0
	})

	return emprestimoAprovado
}

console.log(clientesParaEmprestimo(listaClientes))

