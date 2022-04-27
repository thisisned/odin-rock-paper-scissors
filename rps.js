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
            break; 
    }
    return result;
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for (let round = 0; round < 5; round++) {
        console.log("Current score: Human: " + playerScore + " | Computer: " + compScore);
        let roundResult = playRound(humanPlay(), computerPlay());
        if (roundResult === "win") playerScore++;
        else if (roundResult === "lose") compScore++;
    }
    console.log("---------------------");
    console.log("Final result:");
    if (playerScore === compScore) console.log("It's a tie! " + playerScore + " all.");
    else {
        playerScore > compScore ? console.log("You win! " + playerScore + " to " + compScore) : console.log("You lose! " + compScore + " to " + playerScore);
    }
}

game();