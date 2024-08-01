let saldoRanked = qtdTaxaVitoriaEDerrota(40, 9)



if(saldoRanked <= 10){
  console.log("Parabens você seu rank é Ferro!")
} else if(saldoRanked >= 11 || saldoRanked <= 20){
  console.log("Parabens você agora é bronze!")
} else if(saldoRanked >= 21 || saldoRanked <= 50){
  console.log("Parabens você agora é Prata!")
} 




















function qtdTaxaVitoriaEDerrota(vitoria, derrota){
  let subPartidas = vitoria - derrota
  return subPartidas
}