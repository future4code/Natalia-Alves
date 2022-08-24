# Labenu Music Awards

<img src= "https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/61af643ee11eb8a08137d937_Logo%20com%20icone.svg" width="300" height="180">

### Projeto desenvolvido no bootcamp da Labenu para criar o banco de dados de um festival, utilizando uma API para fazer o cadastro das bandas, shows e usuários.

# DESCRIÇÃO DO PROJETO:

Através dos endpoints do projeto é possível realizar as seguintes ações no banco de dados, que são as funcionalidades básicas propostas:

→ Cadastro de Usuário;

→ Login;

→ Registrar banda;

→ Visualizar detalhes da banda;

→ Adicionar um show a um dia;

→ Pegar todos os shows de uma data;

Utilizamos o MySQL para criação do nosso banco de dados através do queries.sql no VSCode, e também o Typescript para a construção da lógica dos enpoints da nossa API.

# QUEM FEZ

### - [Laura Lanna](https://github.com/laura-lannab)
### - [Natalia Alves](https://github.com/nataliavalins-fga)

## Como usar o projeto localmente:

Faça o clone do respositório através do GitClone do GitHub e do Git na sua máquina. Após criar a pasta do repositório com os arquivos, abra o terminal Git no VSCode e rode o comando:

```bash
npm install 
```
Já existe um arquivo rest para testar os endpoints, mas se desejar também é possível realizar os testes através do Postman rodando nos scripts npm o comando dev start que roda o servidor localmente em:  http://localhost:3003

## Referências da API:
Aqui listaremos a documentação dos endpoints da API e seu comportamento esperado.

### endpoint que cadastra usuários
POST  /signup

Neste endpoint é necessário passar as seguintes informações no body da requisição. 
```bash
{   
    "email": "fulano@lama.com";
    "password": "258963";
    "name": "Fulano da Silva";
    "role": "ADMIN" ou "NORMAL";
}
```


### endpoint login
POST  /login

Neste endpoint é necessário passar as seguintes informações no body da requisição. 

```bash
{
     "email": "fulano@lama.com";
     "password": "258963";
}
```

### endpoint registrar banda
POST  /register

Neste endpoint é necessário passar as seguintes informações no body da requisição.
```bash
{
    "id": "string",
    "name": "Kings Of Leon",
    "musicGenre": "Rock",
    "responsible": "ADMIN" ou "NORMAL"  
}
```

### endpoint pegar bandas por id
GET  /band/id

Neste endpoint é possível buscar bandas cadastradas por id.


### endpoint para cadastrar show 
POST /add

Neste endpoint é necesário enviar as seguintes informações no body da requisição.
```bash
{
    "weekDay": "FRIDAY" ou "SATURDAY" ou "SUNDAY",
    "startTime": 10h,
    "endTime": 11h,
    "bandId": "string"
}
```

### endpoint para pegar show por data
GET /catch?date=FRIDAY


## Possiveis mensagens de erro

A API pode retornar as seguintes mensagens de erro de acordo com as falhas na requisição:

```bash
400: Bad Request
404: Not Found
500: Internal Server Error

```

