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
    if (human === "rock" && computer === "scissors") result = "win";
    else if (human === "paper" && computer === "rock") result = "win";
    else if (human === "scissors" && computer === "paper") result = "win";
    else if (human === computer) result = "tie";
    else result = "lose";
    switch (result) {
        case "win":
            console.log("You win! " + human + " beats " + computer + ".");
            break;
        case "lose":
            console.log("You lose! " + computer + " beats " + human + ".");
            break;
        case "tie":
            console.log("It's a tie! You both chose " + human);
    }
    return result;
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    while (playerScore < 5 && compScore < 5) {
        console.log("Current score: Human: " + playerScore + " | Computer: " + compScore);
        let roundResult = playRound(humanPlay(), computerPlay());
        if (roundResult === "win") playerScore++;
        else if (roundResult === "lose") compScore++;
    }
    console.log("---------------------");
    console.log("Final result:");
    playerScore > compScore ? console.log("You win! " + playerScore + " to " + compScore) : console.log("You lose! " + compScore + " to " + playerScore);

}

game();