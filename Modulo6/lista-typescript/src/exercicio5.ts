type pessoa = {
    name: string,
    email: string,
    role: "user" | "admin"
}

const listaPessoas: Array <pessoa> =
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function filtroAdministrador (list: Array <pessoa>): string[] {
    const emailFiltrado: Array<pessoa> = list.filter((pessoa) => {
        if (pessoa.role === "admin"){
            return pessoa.email
        }
    })

    let emails : string [] = []

    for (let i=0 ; i<= emailFiltrado.length-1 ; i++) {
        emails.push(emailFiltrado [i].email)
    }

    return emails
}

console.log (filtroAdministrador(listaPessoas))