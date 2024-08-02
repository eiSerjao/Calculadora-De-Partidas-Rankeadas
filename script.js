let winLose = [
  [9,20],
  [19,35],
  [49,78],
  [79,60],
  [99,4],
  [199,80]
]

for(let contador = 0; contador < winLose.length; contador++){
  
  let win = winLose[contador][0]
  
  let lose = winLose[contador][1]
  
  let saldoRanked = qtdTaxaVitoriaEDerrota(win , lose)

  let rank
  
    if(win < 10){
      rank = ("Ferro")

    } else if(win >= 11 && win <= 20){
      rank = ("Bronze")

    } else if(win >= 21 && win <= 50){
      rank = ("Prata")

    } else if(win >= 51 && win <= 80){
      rank = ("Ouro")

    } else if(win >= 81 && win <= 100){
      rank = ("Lendario")

    } else if(win >= 101){
      rank = ("Imortal")
    }

    console.log(`O Heroi está no com saldo de ${saldoRanked} e por isso seu rank é ${rank}` )
    
    
  }

  
  function qtdTaxaVitoriaEDerrota(win, lose){
    let subPartidas = win - lose
    return subPartidas
  }
  