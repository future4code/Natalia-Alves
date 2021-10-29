```function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let mediaPonderada
  let exercicios = ex * 1
  let primeiraProva = p1 * 2
  let segundaProva = p2 * 3 
  let media = (exercicios + primeiraProva + segundaProva) 
  mediaPonderada = media / 6 
  
  if (mediaPonderada >= 9){
   return "A"
  }else if (mediaPonderada < 9 &&  mediaPonderada >= 7.5){
   return  "B" 
  }else if (mediaPonderada < 7.5 && mediaPonderada >= 6){
  return "C" 
  }else if (mediaPonderada < 6){
  return "D"
  }
  }
  ```