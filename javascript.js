//Start of Rock Paper Scissors Game
// Making Computer make a choice among rock,paper and scissors.

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (randomValue === 0){
        computerChoice = rock;
    }
    else if (randomValue === 1){
        computerChoice = paper;
    }
    else {
        computerChoice = scissors;
    }
    return computerChoice.toLowerCase();
}
console.log(getComputerChoice())

// Human selects his choice

function getHumanChoice(){
    let humanChoice = prompt("Choose among rock, paper and scissors by typing what you want.")
    return humanChoice.toLowerCase()
}

// Human vs Computer plays a round.

function playRound(humanChoice, computerChoice){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner = "Yah! You won!";
    let loser = "Sorry! You lost";
    switch (humanChoice, computerChoice){
        case (humanChoice === computerChoice):
            let tie = "It's a tie."
            return tie;
            break;
        
        case ((humanChoice === "rock") && (computerChoice === "paper")):
            humanScore += 1;
            return winner;
            break;
        
        case ((humanChoice === "rock") && (computerChoice === "scissors")):
            humanScore += 1;
            return winner;
            break;

        case ((humanChoice === "paper") && (computerChoice === "rock")):
            humanScore += 1;
            return winner;
            break;
        
        case ((humanChoice === "paper") && (computerChoice === "scissors")):
            computerScore += 1;
            return loser;
            break;
        
        case ((humanChoice === "scissors") && (computerChoice === "rock")):
            computerScore += 1;
            return loser;
            break;
            
    }
    }