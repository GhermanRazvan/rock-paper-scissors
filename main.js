items = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(a){
    let pick =  Math.floor(Math.random() * items.length);
    return a[pick];

}


function playRound(){
    
    let randomChoice = getComputerChoice(items)
    let playerSelection = prompt("Alege un item");
    computerSelection = randomChoice;
    console.log("Alegerea jucatorului este", playerSelection);
    console.log("Computerul a ales",randomChoice);

    if (playerSelection === computerSelection ) {
        return "Tie"
    }

    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")||
        (playerSelection === "Paper" && computerSelection === "Rock")){
            playerScore ++;
            return "The player won because " + playerSelection + " beats " + computerSelection;
        } else {
            computerScore ++;
            return "The computer won because " + computerSelection + " beats " + playerSelection;
        }
}


function game(){
    for ( round = 1; round <= 5; round++){
        console.log("Runda", round);
        console.log(playRound()); 
        console.log("Tu ai scorul", playerScore);
        console.log("Computerul are scorul", computerScore)
           
    }

    if (playerScore == computerScore ){
        return "The game was a tie";
    }else if (playerScore < computerScore){
        return "The computer won";
    }else {
        return "The player won";
    }
}

finalResult = game();
console.log(finalResult)

