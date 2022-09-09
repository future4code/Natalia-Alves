# Dog Hero
<img src= "https://user-images.githubusercontent.com/89141117/189250932-ac883709-4e17-4220-9eab-84b3b02eb514.png" width="500">

### Projeto desenvolvido no bootcamp da Labenu, como um case para conclusão do curso.

# DESCRIÇÃO DO PROJETO:

Recentemente lançamos um serviço novo de passeios. Seu desafio será pensar em uma estrutura que suporte usuários a pedir esse novo serviço para seus peludos. Algumas observações:

→ Fique a vontade para montar o schema do banco como desejar. Apenas a entidade Dog Walking é obrigatória. Além disso, utilize o RDBS de sua preferência;

→ Esta entidade deve conter: status, data de agendamento, preço, duração (30 ou 60 min), latitude, longitude, pets, horário de início e término; Fique a vontade para adicionar qualquer atributo de sua escolha;

→ Você deve criar uma API para Dog Walking com index, show, create, start_walk e finish_walk;

→ A API de index deve receber um filtro através de uma flag para retornar:

    → Apenas os próximos passeios a partir de hoje ou todos.
    → Além disso, paginação não é obrigatório, mas seria um plus;
    → A API para criação de passeio deve receber todos os atributos listados acima menos status;

→ A API de show deve retornar a duração real do passeio, ou seja, a diferença entre o início e o término;

→ O preço é calculado dinamicamente.

    → Um passeio de 30 minutos para 1 cachorro custa R$25, sendo cada cachorro adicional R$15.
    → Um passeio de 60 minutos para 1 cachorro custa R$35, sendo cada cachorro adicional R$20;

Fou utilizado o MySQL para criação do banco de dados através do queries.sql no VSCode, e também o Typescript para a construção da lógica dos enpoints da nossa API.

# QUEM FEZ

### - [Natalia Alves](https://www.linkedin.com/in/nataliavalin/)

## Como usar o projeto localmente:

Faça o clone do respositório através do GitClone do GitHub e do Git na sua máquina. Após criar a pasta do repositório com os arquivos, abra o terminal Git no VSCode e rode o comando:

```bash
npm install 
```
Já existe um arquivo rest para testar os endpoints, mas se desejar também é possível realizar os testes através do Postman rodando nos scripts npm o comando dev start que roda o servidor localmente em:  http://localhost:3003

## Referências da API:
Aqui listaremos a documentação dos endpoints da API e seu comportamento esperado.

### endpoint cria passeios
POST  /walking

Neste endpoint é necessário passar as seguintes informações no body da requisição. 
```bash
{   
  "appointment_date": "2022-09-07", 
  "duration":"00:30:00",
  "latitude":"-19.912998", 
  "longitude":"-43.940933",
  "pets":"1",
  "start_time":"8:00:00", 
  "end_time":"8:50:00"
}
```


### endpoint mostrar por id
GET  /show/001

### endpoint começar por id
POST  /start_walk/001

### endpoint finalizar por id
POST  /finish_walk/001

## Projeto ainda em construção

### ainda por desenvolver o endpoint get index.

## Possiveis mensagens de erro

A API pode retornar as seguintes mensagens de erro de acordo com as falhas na requisição:

```bash
400: Bad Request
404: Not Found
500: Internal Server Error

```

