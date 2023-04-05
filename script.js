
// Create bot that will randomly choose rock, paper or scissors

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = options[randomNumber];
    return choice;
}

// Create function that plays round so it takes playerSelection and computerSelection and return a winner in string

function playRound(playerSelection, computerSelection){

    // Make it case insensitive

    playerSelection = playerSelection.toLowerCase();
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

// Create function game() that plays X round game, keeps score and reports a winner; First to "rounds" is a winner
function game(finalResult) {

    let playerResult = 0;
    let computerResult = 0;

    // Call playRound "rounds" times
    let keepGoing = true;
    while(keepGoing){

        // Take input from the player
        let playerChoice = prompt("Choose Rock, Paper or Scissors: ");

        // Take computer's choice
        let computerChoice = getComputerChoice();

        // Play round
        let score = playRound(playerChoice, computerChoice);

        // Keep track of scores
        if (score === "player"){
            playerResult++;
        }
        else if(score === "computer"){
            computerResult++;
        }

        // If draw, round is not resolved
        else if(score === "draw"){
            console.log("Draw");
        }

        // Check for input validity
        else{
            console.log("Type only 'rock', 'paper' or 'scissors'");
        }
        // Display current scores
        console.log("Computer chose " + computerChoice);
        console.log("Player: " + playerResult);
        console.log("Computer: " + computerResult);
        console.log("\n");

                // Display final result
        if(playerResult === finalResult){
            console.log("PLAYER WINS");
            keepGoing = false;
        }
        else if(computerResult === finalResult){
            console.log("COMPUTER WINS");
            keepGoing = false;
        }
        }
}

// Create a function that will get the result from the user
// when particular button is clicked

const buttonRock = document.querySelector('#Rock');
const buttonPaper = document.querySelector('#Paper');
const buttonScissors = document.querySelector('#Scissors');
const divResult = document.querySelector('div.results');

buttonRock.addEventListener('click', function(e){
    divResult.textContent += 'Rock';
})




