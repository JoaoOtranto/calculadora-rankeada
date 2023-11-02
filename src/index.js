function rankedStatus(wins, losses){
    let rankedBalance = wins - losses
    return rankedBalance
}

let rankedLevel = rankedStatus(102, 37)

switch (true){
    case rankedLevel < 10:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Ferro`) 
    break
    
    case rankedLevel < 21:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Bronze`) 
    break

    case rankedLevel < 51:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Prata`) 
    break

    case rankedLevel < 81:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Ouro`) 
    break

    case rankedLevel < 91:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Diamante`) 
    break

    case rankedLevel < 101:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Lendário`) 
    break

    case rankedLevel >= 101:
        console.log(`O herói tem saldo de ${rankedLevel} vitórias e está no nível Imortal`) 
    break

}