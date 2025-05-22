// const rockBtn = ""
// const paperBtn = document.querySelector("paper");
// const scissorsBtn = document.querySelector("scissors");

// Get the button being clicked and telling the user his choice
const btns = document.querySelector(".btn");
let humanScore = 0;
let computerScore = 0;
let gamingArea = document.querySelector(".gamingArea");
let userChoice = document.createElement("p");
let humanChoice = "";
let playBtn = document.createElement("button");

btns.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    humanChoice = event.target.textContent;
    humanChoice = humanChoice.toLowerCase();
    roundOutcome.textContent = "";
    let userChoiceMsg = `You Chose ${humanChoice}`;
    userChoice.textContent = userChoiceMsg;
    playBtn.textContent = "Play";
    gamingArea.appendChild(userChoice);
    gamingArea.appendChild(playBtn);
    playBtn.classList.add("play");
    userChoice.classList.add("userChoice");
  }
});
// Get Computer's Choice
function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if (randomValue === 0) {
    computerChoice = "rock";
  } else if (randomValue === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice.toLowerCase();
}
let computerChoice = getComputerChoice();

//compare the users choice with that of Computer and check to see the winner
let roundOutcome = document.querySelector(".verdict");
let displayResult = document.querySelector(".results");
let roundScore = document.querySelector(".scoreBoard");
playBtn.addEventListener("click", function () {
  let results = playRound(humanChoice, computerChoice);
  updateResults();
  checkWinner();
  roundOutcome.textContent = results;
  gamingArea.appendChild(roundOutcome);
});

function playRound(humanChoice, computerChoice) {
  const winner = ",yay! You won!";
  const loser = ",sorry! You lost";
  let verdict;

  if (humanChoice === computerChoice) {
    verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n It's a tie.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${winner}`;
  } else {
    computerScore++;
    verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${loser}`;
  }

  return verdict;
}
function updateResults() {
  let scoreBoard = `Your score is ${humanScore} and computer's score is ${computerScore}`;
  roundScore.textContent = scoreBoard;
  displayResult.appendChild(roundScore);
  computerChoice = getComputerChoice();
}

// Start over again and state the results on top of the page after the first round
function checkWinner() {
  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore >= 5) {
      roundScore.textContent = "Congratulations, You won the 5 round game";
      humanScore = 0;
      computerScore = 0;
    } else {
      roundScore.textContent = "Sorry, You lost the 5 round game";
      humanScore = 0;
      computerScore = 0;
    }
  }
}

//Start the process again for 5 rounds and anounce a winner at the end
