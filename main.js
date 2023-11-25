items = ["Rock", "Paper", "Scissors"];

function getComputerChoice(a){
    let pick =  Math.floor(Math.random() * items.length);
    return a[pick];

}

let randomChoice = getComputerChoice(items)
// console.log("Computerul a ales",randomChoice)

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock" && computerSelection == "Rock"){
        return "Tie"
    }else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lost! Paper beats rock"
    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You won! Rock beats scissors"
    }else if (playerSelection == "Paper" && computerSelection == "Paper"){
        return "Tie"
    }else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lost! Scissors beats paper"
    }else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You won! Paper beats rock"
    }else if (playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Tie"
    }else if (playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You won! Scissors beats paper"
    }else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lost! Rock beats scissors"
    }
}


let playerSelection = prompt("Alege un item");
console.log("Alegerea jucatorului este", playerSelection);
let computerSelection = randomChoice;
console.log("Computerul a ales",randomChoice);
console.log(playRound(playerSelection, computerSelection));



