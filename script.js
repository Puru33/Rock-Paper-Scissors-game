// <<<<<<< HEAD
// =======
let humanScore = 0;
let computerScore = 0;

const resultDisplay = document.querySelector("#round-result");
const humanScoreDisplay = document.querySelector("#humen-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const winnerAnnouncement = document.querySelector("#winner-announcement");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resetBtn = document.querySelector("#reset");

// >>>>>>> rps-ui
function getComputerChoice() {
  let ramdomNumber = Math.floor(Math.random() * 3);
  if (ramdomNumber === 0) {
    return "rock";
  } else if (ramdomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// <<<<<<<
//  HEAD
// =======
function playRound(humanChoice) {
  if (humanScore === 5 || computerScore == 5) {
    return;
  }
  const computerChoice = getComputerChoice();

  let roundMessage = "";

  if (humanChoice === computerChoice) {
    roundMessage = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundMessage = `You win! ${humanChoice} beats ${computerChoice} `;

    humanScore++;
  } else {
    roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;

    computerScore++;
  }

  resultDisplay.textContent = roundMessage;
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  checkWinner();
}

function checkWinner() {
  if (humanScore === 5) {
    winnerAnnouncement.textContent = "CONGRATULATIONS! You won the game!";
    disableButtons();
    showResetButton();
  } else if (computerScore === 5) {
    winnerAnnouncement.textContent = "GAME OVER. The computer won.";
    disableButtons();
    showResetButton();
  }
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  rockBtn.style.backgroundColor = "grey";
  paperBtn.style.backgroundColor = "grey";
  scissorsBtn.style.backgroundColor = "grey";
}

function showResetButton() {
  resetBtn.style.display = "inline-block";
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;

  humanScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  resultDisplay.textContent = "Choose a weapon to start!";
  winnerAnnouncement.textContent = "";

  rockBtn.disabled = false;
  paperBtnBtn.disabled = false;
  scissorsBtnBtn.disabled = false;

  rockBtn.style.backgroundColor = "#007BFF";
  paperBtn.style.backgroundColor = "#007BFF";
  scissorsBtn.style.backgroundColor = "#007BFF";

  resetBtn.style.display = "none";
}

resetBtn.addEventListener("click", resetGame);
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// >>>>>>> rps-ui
