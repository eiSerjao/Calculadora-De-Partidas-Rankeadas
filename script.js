// let winLose = [
//   [20,11]
//   [20,1]
//   [50,1]
//   [80,1]
//   [100,1]
//   [200,1]
// ]
for(){
  let saldoRanked = qtdTaxaVitoriaEDerrota(50,1)



if(saldoRanked <= 10){
  console.log("Parabens você seu rank é Ferro!")

} else if(saldoRanked >= 11 && saldoRanked <= 20){
  console.log("Parabens você agora é bronze!")

} else if(saldoRanked >= 21 && saldoRanked <= 50){
  console.log("Parabens você agora é Prata!")

} else if(saldoRanked >= 51 && saldoRanked <= 80){
  console.log("Parabens você agora é Ouro!")

} else if(saldoRanked >= 81 && saldoRanked <= 100){
  console.log("Parabens você agora é Lendário!")

} else if(saldoRanked >= 101){
  console.log("Parabens você agora é Imortal!")
}
}


function qtdTaxaVitoriaEDerrota(vitoria, derrota){
  let subPartidas = vitoria - derrota
  return subPartidas
}