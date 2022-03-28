const listaClientes = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
];
function clientesParaEmprestimo(lista) {
    const novaListaClientes = lista.map((cliente) => {
        let debitos = 0;
        for (let i = 0; i < cliente.debitos.length; i++) {
            debitos += cliente.debitos[i];
        }
        cliente["saldoTotal"] -= debitos;
        return cliente;
    });
    const emprestimoAprovado = novaListaClientes
        .filter((cliente) => {
        return cliente.saldoTotal < 0;
    });
    return emprestimoAprovado;
}
console.log(clientesParaEmprestimo(listaClientes));
//# sourceMappingURL=exercicio6.js.map