
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const divResult = document.querySelector('div.results p');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const modalPara = document.querySelector('.modal-content h1')
const playerImage = document.querySelector('#player-img');
const compImage = document.querySelector('#computer-img');
const bestOf = 5;

// Create bot that will randomly choose rock, paper or scissors

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = options[randomNumber];
    return choice;
}

// Create function that plays round so it takes playerSelection and computerSelection and returns a winner in string

function playRound(playerSelection, computerSelection){

    let winner;
    if (playerSelection === computerSelection) {
        winner = "draw";
        return winner;
    }
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            winner = "computer";
        }
        else{
            winner = "player";
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
             winner = "computer";
        }
        else{
             winner = "player";
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            winner = "computer";
        }
        else{
            winner = "player";
        }
    }
    else {
     winner = "undefined";
    }

    return winner;
}

let playerScore = 0;
let computerScore = 0;

function updateScore(roundWinner){
    if (roundWinner === 'player'){
        playerScore++;
    }
    else if (roundWinner === 'computer'){
        computerScore++;
    }
    divResult.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function isOver(playerScore, computerScore){
    if (playerScore === bestOf){
        divResult.textContent = `CONGRATULATIONS, YOU WON!
        
        `;
        return true;
    }
    else if (computerScore === bestOf){
        divResult.textContent = `YOU LOST
        
        `;
        return true;
    }
    return false;
}

function resetGame(winner){
    divResult.textContent = "Select ROCK, PAPER or SCISSORS";
    modal.style.display = "flex";
    if (winner === "player"){
        modalPara.textContent = `CONGRATULATIONS! YOU WON ${playerScore} - ${computerScore}`;
    }
    else{
        modalPara.textContent = `YOU LOST ${playerScore} - ${computerScore}`;
    }
    playerScore = 0;
    computerScore = 0;
    playerImage.src = "images/question.jpg";
    compImage.src = "images/question.jpg";
}

function selectImages(playerChoice, compChoice){
    if (playerChoice === 'rock'){
        playerImage.src = "images/rock.png";
    }
    else if (playerChoice === 'paper'){
        playerImage.src = "images/paper.png";
    }
    else {
        playerImage.src = "images/scissors.png";
    }

    if (compChoice === 'rock'){
        compImage.src = "images/rock.png";
    }
    else if (compChoice === 'paper'){
        compImage.src = "images/paper.png";
    }
    else {
        compImage.src = "images/scissors.png";
    }
}

function playGame(e){
    playerChoice = this.id;
    compChoice = getComputerChoice();
    roundWinner = playRound(playerChoice, compChoice);
    selectImages(playerChoice, compChoice);
    updateScore(roundWinner);
    if (isOver(playerScore, computerScore)){
        let winner;
        if (playerScore === bestOf){
            winner = "player";
        }
        else {
            winner = "computer";
        }
        resetGame(winner);
    }
}

buttonRock.addEventListener('click', playGame);
buttonPaper.addEventListener('click', playGame);
buttonScissors.addEventListener('click', playGame);
modalBtn.addEventListener('click', function(e){
    modal.style.display = "none";
})
 



