let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
  winners = [];
  document.querySelector('.playerScore').textContent = 'Score: 0';
  document.querySelector('.computerScore').textContent = 'Score: 0';
  document.querySelector('.playerChoice').textContent = 'Your choice';
  document.querySelector('.computerChoice').textContent = 'Computer choice';
  document.querySelector('.ties').textContent = 'Rock Paper Scissors';
  document.querySelector('.winner').textContent = 'Click anything in the first row to pley against the computer!';
  document.querySelector('.reset').style.display = "none";
}

function startGame() {
  //play until sb wins 5 rounds
  let imgs = document.querySelectorAll('img');
  imgs.forEach((img) => 
    img.addEventListener(('click'), () => {
      if(img.id) {
        console.log(img.id);
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }
  const computerChoice = computerSelect();
  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice);
  displayRoundWinner(winner);
  wins = checkWins();
  if (wins == 5) {
    //display end results, 
    //change button to visible
    //change text to display winner
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 5) {
    document.querySelector('.winner').textContent = "You won 5 times, congrats!";
  } else {
    document.querySelector('.winner').textContent = "Computer won 5 times, such a shame!";
  }
  document.querySelector('.reset').style.display = 'flex';
}

function displayRound(playerChoice, computerChoice) {
  document.querySelector('.playerChoice').textContent = `You chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
  document.querySelector('.computerChoice').textContent = `Computer chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
}

function displayRoundWinner(winner) {
  if (winner == "Player") document.querySelector('.winner').textContent = "You won the round!";
  else if (winner == "Computer") document.querySelector('.winner').textContent = "Computer won the round :(";
  else document.querySelector('.winner').textContent = "The round was a tie.";
}

function tallyWins() {
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const pWinCount = winners.filter((item) => item == "Player").length;
  document.querySelector('.playerScore').textContent = `Your score: ${pWinCount}`;
  document.querySelector('.computerScore').textContent = `Computer score: ${cWinCount}`;
}

function computerSelect() {
  //todo - update the DOM
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function setWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
}

startGame();