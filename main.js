items = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(a){
    let pick =  Math.floor(Math.random() * items.length);
    return a[pick];

}


function playRound(playerSelection, computerSelection){
    let randomChoice = getComputerChoice(items)
    playerSelection = prompt("Alege un item");
    console.log("Alegerea jucatorului este", playerSelection);
    computerSelection = randomChoice;
    console.log("Computerul a ales",randomChoice);
    if (playerSelection == "Rock" && computerSelection == "Rock"){
        return "Tie"
    }else if (playerSelection == "Rock" && computerSelection == "Paper"){
        computerScore++;
        return "You lost! Paper beats rock"
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        playerScore++;
        return "You won! Rock beats scissors"
    }else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return "Tie"
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        computerScore++;
        return "You lost! Scissors beats paper"
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        playerScore++;
        return "You won! Paper beats rock"
    }else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Tie"
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        playerScore++;
        return "You won! Scissors beats paper"
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        computerScore++;
        return "You lost! Rock beats scissors"
    }
}


function game(){
    for ( round = 1; round < 6; round++){
        console.log("Tu ai scorul", playerScore);
        console.log("Computerul are scorul", computerScore)
        console.log("Runda", round);
        console.log(playRound());    
    }
    if (playerScore == computerScore ){
        return "The game was a tie";
    }else if (playerScore < computerScore){
        return "The computer won";
    }else {
        return "The player won";
    }
}

game();


