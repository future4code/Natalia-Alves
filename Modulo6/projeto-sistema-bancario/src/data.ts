export type Clients = {
    id: number | string,
    name: string,
    cpf: number,
    age: number,
    balance?: number
    accountstatement?:Accountstatement[]
}

type Accountstatement = {
    value: number,
    date: string,
    description: string
}

type Transactions = {
    deposit: number,
    paybill: number,
    transference: number
}

export const clients : Clients [] = [
    {
        id: 1,
        name: "Roronoa Zoro",
        cpf: 12345678910,
        age: 22,
        balance: 125896,
        accountstatement: [
            {
                value: 2563,
                date: "13/02/2022",
                description: "pagar Nami"
            },
            {
                value: 3654,
                date: "16/03/2022",
                description: "pagar Usopp"
            },
            
        ]
    },
    {
        id: 2,
        name: "Vinsmoke Sanji",
        cpf: 78945612320,
        age: 23,
        balance: 85479632,
        accountstatement: [
            {
                value: 25698,
                date: "13/02/2022",
                description: "Suprimentos para o navio"
            },
            {
                value: 52897,
                date: "16/03/2022",
                description: "Poster da Vivi UwU"
            },
            
        ]
    }

]
