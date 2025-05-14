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


// Human selects his choice

function getHumanChoice(){
    let humanChoice = prompt("Choose among rock, paper and scissors by typing what you want.")
    return humanChoice.toLowerCase()
}

// Human vs Computer plays a round.

function playRound(humanChoice, computerChoice){
    let winner = "Yah! You won!";
    let loser = "Sorry! You lost";
    let verdict;
        if (humanChoice === computerChoice){
            let tie = "It's a tie."
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${tie}`
            return verdict
        }
        
        else if ((humanChoice === "rock") && (computerChoice === "paper")){
            humanScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${winner}`;
            return verdict;
            
            
        }
        
        else if ((humanChoice === "rock") && (computerChoice === "scissors")){
            humanScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${winner}`;
            return verdict;
        }

        else if ((humanChoice === "paper") && (computerChoice === "rock")){
            humanScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${winner}`;
            return verdict;
        }
        
        else if ((humanChoice === "paper") && (computerChoice === "scissors")){
            computerScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${loser}`;
            return verdict
        }
        
        else if ((humanChoice === "scissors") && (computerChoice === "rock")){
            computerScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${loser}`;
            return verdict;
        }
        
        else if ((humanChoice === "scissors") && (computerChoice === "paper")){
            humanScore += 1;
            verdict = `You chose ${humanChoice} and computer chose ${computerChoice} \n ${winner}`;
            return verdict;
        }

    }
    
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

