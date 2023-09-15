// random number between min and max
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}
//generates computer's choice
function getComputerChoice(){
    let rndInt = getRndInteger(1,4)
    if (rndInt === 1){
        return "rock"
    }else if (rndInt === 2){
        return "paper"
    } else {
        return "scissors"
    }
}

let playerSelection = prompt("What is your choice?");
let computerSelection = getComputerChoice()

console.log(computerSelection +" "+ playerSelection.toLowerCase())