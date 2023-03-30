
// create bot that will randomly choose rock, paper or scissors

function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let choice = options[randomNumber];
    console.log(choice);
}

getComputerChoice();
// create function that plays round so it takes playerSelection and computerSelection and return a winner in string


    // make it case insensitive



// create function game() that plays 5 round game, keeps score and reports a winner