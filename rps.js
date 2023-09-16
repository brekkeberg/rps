
//creates js object for each button option by the button's id
const buttonRock = document.querySelector('button#rock');
const buttonPaper = document.querySelector('button#paper');
const buttonScissors = document.querySelector('button#scissors');
const compSelectionDiv = document.querySelector('#computerSelection');
const playerSelectionDiv = document.querySelector('#playerSelection');
const totalScoreDiv = document.querySelector('#totalScore');

// runs function player's choice function upon button click
buttonRock.addEventListener('click', game)
buttonPaper.addEventListener('click', game)
buttonScissors.addEventListener('click', game)


let tieScore = 0;
let computerScore = 0;
let playerScore = 0;
let first = true;
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
    
    //delcares comp and user choices
    let playerSelection = this.id;
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
    let gameOutcome = playRPSgame()
    console.log(gameOutcome);
    console.log(typeof(gameOutcome));


    //let gameResult = playRPSgame()
    compSelectionDiv.textContent = computerSelection;
    playerSelectionDiv.textContent = playerSelection;
    totalScoreDiv.textContent = gameOutcome;
    console.log("Computer Score: " + computerScore + ", Player Score: " + playerScore + ", Ties: " + tieScore);

    first = false;
    console.log(first);
}



