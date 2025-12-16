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

function getHumanChoice() {
  const userInput = prompt("enter rock, paper, scissors:");
  const choice = userInput.toLowerCase().trim();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("Invalid choice! please enter rock, paper or scissors ");
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! Computer choose: ${computerChoice} `);

      humanScore++;
    } else {
      console.log(`Computer Win! Computer choose: ${computerChoice}`);

      computerScore++;
    }
    console.log(`score > Human: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("Round 1");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 2");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 3");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 4");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Round 5");
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Game Over");
  if (humanScore > computerScore) {
    console.log("You won the game");
  } else if (computerScore > humanScore) {
    console.log("computer won the game");
  } else {
    console.log("It's Draw overall");
  }
}

playGame();

// const humenSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humenSelection, computerSelection);
