
//creates js object for each button option by the button's id
const buttonRock = document.querySelector('button#rock');
const buttonPaper = document.querySelector('button#paper');
const buttonScissors = document.querySelector('button#scissors');
const compSelectionDiv = document.querySelector('#computerSelection');
const playerSelectionDiv = document.querySelector('#playerSelection');
const gameResultDiv = document.querySelector('#gameResult');
const totalScoreDiv = document.querySelector('#totalScore');
const winnerDeclaredP = document.querySelector('#winnerDeclared');
const compScoreDiv = document.querySelector('#compScore');
const playerScoreDiv = document.querySelector('#playerScore');
const tieScoreDiv = document.querySelector('#tieScore');

// runs function player's choice function upon button click
buttonRock.addEventListener('click', game)
buttonPaper.addEventListener('click', game)
buttonScissors.addEventListener('click', game)


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
            return "Computer wins!"
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
            playerScore ++;
            return "You win!"
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            computerScore ++;
            return "Computer wins!"
        } else if (playerSelection == "paper" && computerSelection == "rock"){
            playerScore ++;
            return "You win!"
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            playerScore ++;
            return "You win!"
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            computerScore ++;
            return "Computer wins!"
        } 
    }
    let gameOutcome = playRPSgame()
    let totalScore = "Comp: " + computerScore + "   Player: " + playerScore + "   Ties: " + tieScore;
    console.log(gameOutcome);
    console.log(typeof(gameOutcome));


    // outtput game data to page
    compSelectionDiv.textContent = computerSelection;
    playerSelectionDiv.textContent = playerSelection;
    gameResultDiv.textContent = gameOutcome;
    compScoreDiv.textContent = "Comp: " +computerScore;
    playerScoreDiv.textContent = "Player: " + playerScore;
    tieScoreDiv.textContent = "Tie: " + tieScore;

    // detect if anyone has reached 5 points
    if (computerScore  === 5){
        winnerDeclaredP.textContent = "Computer wins!"
        playerScore = 0
        computerScore = 0
        tieScore = 0
    } else if (playerScore === 5){
        winnerDeclaredP.textContent = "You win!"
        playerScore = 0
        computerScore = 0
        tieScore = 0
    } else{
        winnerDeclaredP.textContent = ""
    }

}



