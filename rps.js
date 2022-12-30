// Initialisation

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
const newGameButton = document.querySelector('#new-game');
newGameButton.style.display = "none";
const hScore = document.querySelector('#human-score');
const cScore = document.querySelector('#computer-score');
const buttons = document.querySelectorAll('.button');

// Computer chooses a random option
function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

// Main game logic 
function playRound(human, computer) {
    let result;
    let message;
    if (human === "rock" && computer === "scissors") result = "win";
    else if (human === "paper" && computer === "rock") result = "win";
    else if (human === "scissors" && computer === "paper") result = "win";
    else if (human === computer) result = "tie";
    else result = "lose";
    switch (result) {
        case "win":
            message = "You win! " + human + " beats " + computer + ".";
            playerScore++;
            break;
        case "lose":
            message = "You lose! " + computer + " beats " + human + ".";
            compScore++;
            break;
        case "tie":
            message = "It's a tie! You both chose " + human;
    }

    // Adds commentary text to UI
    const para = document.createElement('p');
    const text = document.createTextNode(message);
    para.appendChild(text);
    document.getElementById("commentary").appendChild(para);
    return result;
}

// Displays final result and disables / displays appropriate buttons
function endGame() {
    let winnerText = playerScore > compScore ? "You win! " + playerScore + " to " + compScore : "You lose! " + compScore + " to " + playerScore;
    const para = document.createElement('h1');
    const text = document.createTextNode(winnerText);
    para.appendChild(text);
    document.getElementById("result").appendChild(para);
    buttons.forEach(button => button.disabled = true);
    newGameButton.style.display = "block";
}

// Button choice click event
buttons.forEach(button => button.addEventListener("click", function () {
    playRound(this.id, computerPlay());
    hScore.textContent = playerScore;
    cScore.textContent = compScore;
    if (playerScore === 5 || compScore === 5) {
        endGame();
    }
}));

// New game button resets everything
newGameButton.addEventListener("click", function() {
    playerScore = 0;
    compScore = 0;
    hScore.textContent = playerScore;
    cScore.textContent = compScore;
    buttons.forEach(button => button.disabled = false);
    document.getElementById("commentary").replaceChildren();
    document.getElementById("result").replaceChildren();

    newGameButton.style.display = "none";
});