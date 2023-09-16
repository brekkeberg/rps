// sets all scores at 0
let tieScore = 0;
let computerScore = 0;
let playerScore = 0;

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

    let playerSelection = playerChoice;
    let computerSelection = getComputerChoice()

    //plays one game of RPS
    function playRPSgame(){
        if (playerSelection === computerSelection){
            tieScore++;
            return "Tie!"
        } else if (playerSelection == "rock" && computerSelection == "paper"){
            computerScore ++;
            return "Computer wins with Paper > Rock!"
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore ++;
            return "You win with Rock > Scissors!"
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore ++;
            return "Computer wins with Scissors > Paper!"
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore ++;
            return "You win with Paper > Rock!"
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore ++;
            return "You win with Scissors > Paper!"
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore ++;
            return "Computer wins with Rock > Scissors!"
        } 
    }

    //let gameResult = playRPSgame()
    console.log("The Computer's Selection was " + computerSelection)
    console.log("Your Choice was " + playerSelection)
    console.log(playRPSgame())
    console.log("Computer Score: " + computerScore + ", Player Score: " + playerScore + ", Ties: " + tieScore)
}

for (let i = 0; i < 5; i++) {
    console.log("Game Number " + (i+1))
    game.call()
} 

console.log("Thank you for playing!")









