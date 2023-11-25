function getComputerChoice(){
    let items = ["Rock", "Paper", "Scissors"];
    let pick =  Math.floor(Math.random() * items.length);
    console.log("Alegerea este ", items[pick])
}

