




function game(){
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

    let playerSelection = prompt("What is your choice?").toLowerCase();
    let computerSelection = getComputerChoice()

    //plays one game of RPS
    function playRPSgame(){
        if (playerSelection === computerSelection){
            return "Tie!"
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            return "Computer wins with Paper > Rock!"
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            return "You win with Rock > Scissors!"
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            return "Computer wins with Scissors > Paper!"
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            return "You win with Paper > Rock!"
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            return "You win with Scissors > Paper!"
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            return "Computer wins with Rock > Scissors!"
        } 
    }

    //let gameResult = playRPSgame()
    console.log("The Computer's Selection was " + computerSelection)
    console.log("Your Choice was " + playerSelection)
    console.log(playRPSgame())
}

game.call()





