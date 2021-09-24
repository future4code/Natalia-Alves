// 1. Leia o código abaixo:

//     ```jsx
//     const respostaDoUsuario = prompt("Digite o número que você quer testar")
//     const numero = Number(respostaDoUsuario)

//     if (numero % 2 === 0) {
//       console.log("Passou no teste.")
//     } else {
//       console.log("Não passou no teste.")
//     }
//     ```

//     a) Explique o que o código faz. Qual o teste que ele realiza? 
//      RESPOSTA: ELE TESTA SE O NUMERO INSERIDO PELO USUÁRIO É PAR OU IMPAR.

//     b) Para que tipos de números ele imprime no console "Passou no teste"? 
//      RESPOSTA: ELE IMPRIME ESSA MENSAGEM QUANDO O NÚMERO INSERIDO PELO USUÁRIO É PAR.

//     c) Para que tipos de números a mensagem é "Não passou no teste"?
//      RESPOSTA: ELE IMPRIME ESSA MENSAGEM QUANDO O NÚMERO INSERIDO PELOUSUÁRIO É ÍMPAR.

// 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

//     ```jsx
    // let fruta = prompt("Escolha uma fruta")
    // let preco
    // switch (fruta) {
    //   case "Laranja":
    //     preco = 3.5
    //     break;
    //   case "Maçã":
    //     preco = 2.25
    //     break;
    //   case "Uva":
    //     preco = 0.30
    //     break;
    //   case "Pêra":
    //     preco = 5.5
    //     break; // BREAK PARA O ITEM c.
    //   default:
    //     preco = 5
    //     break;
    // }
    // console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//     ```

//     a) Para que serve o código acima?
//      RESPOSTA: É UM CÓDIGO PARA CONSULTA DE PREÇOS DE PRODUTOS, NO CASO DO EXEMPLO. FRUTAS.

//     b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//      RESPOSTA: "O PREÇO DA FRUTA MAÇÃ É R$ 2.25"

//     c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
//      retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//      RESPOSTA: O CÓDIGO EXIBE NO CONSOLE O PREÇO DE DEFAULT, AO INVÉS DO PREÇO QUE ESTÁ DEFINIDO PARA A PÊRA 
//      QUE É DE 5.5 .


// 3. Leia o código abaixo:

//     ```jsx
    // const numero = Number(prompt("Digite o primeiro número."))

    // if(numero > 0) {
    //   console.log("Esse número passou no teste")
    // 	let mensagem = "Essa mensagem é secreta!!!"
    // }

    // console.log(mensagem)
//     ```

//     a) O que a primeira linha está fazendo?
//      RESPOSTA: ESTÁ RECEBENDO UM NÚMERO INSERIDO PELO USUÁRIO E COMO QUALQUER DADO INSERIDO ATRAVÉS DE UM PROMPT
//      É UMA STRING, TAMBÉM ESTÁ CONVERTENDO ELE PARA UM NÚMERO.

//     b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//      RESPOSTA: CASO O NÚMERO SEJA 10 A MENSAGEM EXIBIDA É "ESSE NÚMERO PASSOU NO TESTE", SE FOR -10 É EXIBIDA
//      UMA MENSAGEM DE ERRO.
//     c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//      RESPOSTA: SIM, HAVERÁ UM ERRO POIS PARA O CASO DE O NÚMERO NÃO PASSAR NO TESTE O PROGRAMA RODA PARA 
//      O CONSOLE.LOG QUE ESTÁ CITANDO UMA VARIÁVEL QUE FOI DEFINIDA DENTRO DO ESCOPO DO IF E ELE NÃO ENTENDE 
//      ELA COMO UMA VARIÁVEL QUE FOI DECLARADA.

//EXERCÍCIOS DE ESCRITA DE CODIGO

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).

//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima 
//no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

let idadeUsuario = Number(prompt("Qual a sua idade?"))

if (idadeUsuario > 18){
    console.log ("Você pode dirigir")
}else {
    console.log("Você não pode dirigir")
}

// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) 
//ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
// Utilize o bloco `if/else`
//     - 💡 Dica

//         Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem `"Boa Tarde!"`
//         Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)

//         Se o usuário digitar "V", a saída deve ser:

//         ```
//         "Boa Tarde!"
//         ```

let horarioAulas = prompt("Em qual horário você estuda? Digite 'M'(matutino), 'V' (vespertino) ou 'N'(noturno)")
if (horarioAulas === "M"){
    console.log("Bom Dia!")
    }else if (horarioAulas === "V"){
        console.log("Boa Tarde!")
    }else if (horarioAulas === "N"){
        console.log("Boa Noite!")
    }


// 3. Repita o exercício anterior, mas utilizando a estrutura de `switch case` agora.
//     - 💡 Dica

//         Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (`===`)

let horarioAulasSwitch = prompt("Em qual horário você estuda? Digite 'M'(matutino), 'V' (vespertino) ou 'N'(noturno)")

switch (horarioAulasSwitch){
    case 'M':
        console.log("Bom Dia!")
        break
    case 'V':
        console.log("Boa Tarde!")
        break
    case 'N':
        console.log("Boa Noite!")
        break
    default:
        console.log("Horário de aula não foi informado pelo aluno.")
        break
}



// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com 
//você se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. Faça um código que pergunta 
//ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique 
//se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`, 
//caso contrário, imprima `"Escolha outro filme :("`

let escolhaUmFilme = prompt("Digite o gênero do filme exibido no cinema que você deseja assistir:")
let valorDoIngressoDoFilme = Number (prompt("Qual o valor do ingresso do filme que você deseja assistir?"))

if (escolhaUmFilme === "fantasia" && valorDoIngressoDoFilme <= 15){
    console.log("Bom filme!")
}else 
console.log("Escolha outro filme :(")