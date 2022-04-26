const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function humanPlay() {
    let valid = false;
    let humanChoice;
    while (!valid) {
        humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
        if (choices.includes(humanChoice)) {
            valid = true;
        }
    }
    return humanChoice;
}

function playRound(human, computer) {
    let result;
    let win = "You win! " + human + " beats " + computer + ".";
    let lose = "You lose! " + computer + " beats " + human + ".";
    let tie = "It's a tie! You both chose " + human;
    if (human === "rock" && computer === "scissors") result = win;
    else if (human === "paper" && computer === "rock") result = win;
    else if (human === "scissors" && computer === "paper") result = win;
    else if (human === computer) result = tie;
    else result = lose;
    console.log(result);
}

playRound(humanPlay(), computerPlay());