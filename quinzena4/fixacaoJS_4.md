```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let contagemDaRepeticao = 0
  for (let i = 0 ; i < arrayDeNumeros.length; i++){
  if(arrayDeNumeros[i] === numeroEscolhido){
    contagemDaRepeticao = contagemDaRepeticao + 1 
  }
  }
if (contagemDaRepeticao === 0){
  return `Número não encontrado`
}else{
  return`O número ${numeroEscolhido} aparece ${contagemDaRepeticao}x`
  
}
}
```