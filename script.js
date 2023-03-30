
// create bot that will randomly choose rock, paper or scissors

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = options[randomNumber];
    return choice;
}

// create function that plays round so it takes playerSelection and computerSelection and return a winner in string

function playRound(playerSelection, computerSelection){

    // make it case insensitive

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

// create function game() that plays 5 round game, keeps winner and reports a winner
function game(rounds) {
    let playerResult = 0;
    let computerResult = 0;
    // call playRound "rounds" times
    for(let i = 0; i < rounds; i++){

        let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
        let computerChoice = getComputerChoice();
        let score = playRound(playerChoice, computerChoice);

        if (score === "player"){
            playerResult++;
        }
        else if(score === "computer"){
            computerResult++;
        }
        else if(score === "draw"){
            rounds++;
        }
        else{
            console.log("Type only 'rock', 'paper' or 'scissors'");
            rounds++;
        }

        console.log("Computer chose " + computerChoice);
        console.log("Player: " + playerResult);
        console.log("Computer: " + computerResult);
        console.log("\n");
    }

    if(playerResult > computerResult){
        console.log("PLAYER WINS");
    }
    else if(playerResult < computerResult){
        console.log("COMPUTER WINS");
    }
    else{
        console.log("DRAW");
    }
}

game(5);
