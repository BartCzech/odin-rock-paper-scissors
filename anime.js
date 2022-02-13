function computerPlay() {
    let choice = Math.random();
    console.log(choice);

    if(choice <= 0.33) {
        return "Rock";
    } else if(choice > 0.66) {
        return "Scissors";
    } else return "Paper";
}

function round(playerSelection, computerSelection) {
    if(playerSelection === "rock") {
        if(computerSelection === "Rock") return "Computer choice: Rock \nDraw! Rock vs Rock";
        else if(computerSelection === "Scissors") return "Computer choice: Scissors \nYou won! Rock beats Scissors";
        if(computerSelection === "Paper") return "Computer choice: Paper \nYou lost! Paper beats Rock";
    } else if(playerSelection === "scissors") {
        if(computerSelection === "Rock") return "Computer choice: Rock \nYou lost! Rock beats Scissors";
        else if(computerSelection === "Scissors") return "Computer choice: Scissors \nDraw! Scissors vs Scissors";
        if(computerSelection === "Paper") return "Computer choice: Paper \nYou won! Scissors beats Paper";
    } else if(playerSelection === "paper") {
        if(computerSelection === "Rock") return "Computer choice: Rock \nYou won! Paper beats Rock";
        else if(computerSelection === "Scissors") return "Computer choice: Scissors \nYou lost! Scissors beats Paper";
        if(computerSelection === "Paper") return "Computer choice: Paper \nDraw! Paper vs Paper";
    } else return "Wrong word";
}

function game() {
    const lost = "lost";
    const won = "won";
    const draw = "Draw";
    let computerScore = 0;
    let userScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = userChoice();
        let computerSelection = computerPlay();

        let result = round(playerSelection, computerSelection);
        console.log(result);
        if (result.includes(lost)) {
            computerScore++;
        }
        else if (result.includes(won)) {
            userScore++;
        }
        else if(result.includes(draw)) console.log("Draw");
        else console.log("bruh pley with me")
    }
    console.log("User score:", userScore);
    console.log("Computer score:", computerScore);
}

function userChoice() {
    let userChoice = prompt("What do you choose: Rock, Paper, or Scissors?");
    return userChoice.toLowerCase();
}
game();
