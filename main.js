items = ["Rock", "Paper", "Scissors"];

function getComputerChoice(a){
    let pick =  Math.floor(Math.random() * items.length);
    return a[pick];

}

let randomChoice = getComputerChoice(items)
console.log(randomChoice)


function playRound(playerSelection, computerSelection){
    playerSelection = "Rock"
    computerSelection = getComputerChoice();
    if (playerSelection != computerSelection){
        console.log("Ai pierdut");
    }
}

