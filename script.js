let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

nameChange.innerHTML = `<p>${story}</p>`

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let roundResults = [];

// Result messages for different outcomes
const winMessages = [
    'Congratulations! You win!',
    'You are the winner!',
];

const loseMessages = [
    'Computer wins the game.',
    'Better luck next time!',
];

const tieMessages = [
    'It\'s a tie. Good game!',
    'No winner this round.',
];

// randomly selects a message from an array
function getRandomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Function to play a round
function playGame(playerChoice) {
    if (roundNumber < 5) {
        roundNumber++;

        // Get Computer Choice
        const randomNumber = Math.floor(Math.random() * 3);
        let computerChoice;
        if (randomNumber === 0) {
            computerChoice = 'Rock';
        } else if (randomNumber === 1) {
            computerChoice = 'Paper';
        } else {
            computerChoice = 'Scissors';
        }

        // Make the choice uppercase
        playerChoice = playerChoice.toUpperCase();
        computerChoice = computerChoice.toUpperCase();

        // Show choices
        document.getElementById("playerChoice").innerHTML = `<h5 class="text-center">Player Choice: ${playerChoice}</h5>`;
        document.getElementById("computerChoice").innerHTML = `<h5 class="text-center">Computer Choice: ${computerChoice}</h5>`;

        // Find the winner
        let roundResult;
        if (playerChoice === computerChoice) {
            document.getElementById('winner').textContent = 'It\'s a tie!';
        } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
            document.getElementById('winner').textContent = 'Computer wins!';
            computerScore++;
        } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
            document.getElementById('winner').textContent = 'You win!';
            playerScore++;
        } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
            document.getElementById('winner').textContent = 'Computer wins!';
            computerScore++;
        } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
            document.getElementById('winner').textContent = 'You win!';
            playerScore++;
        } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
            document.getElementById('winner').textContent = 'You Win!';
            playerScore++;
        } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
            document.getElementById('winner').textContent = 'Computer wins!';
            computerScore++;
        }

        // Update scores
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;

        // End the game
        if (roundNumber === 5) {
            // Display game over message
            document.getElementById('resultMessage').textContent = 'Game Over! Click Restart to play again!!';
            // Congratulatory message
            if (playerScore > computerScore) {
                document.getElementById('resultMessage').innerHTML = getRandomMessage(winMessages) + ' Click to play again!';
            } else if (playerScore < computerScore) {
                document.getElementById('resultMessage').innerHTML = getRandomMessage(loseMessages) + ' Click to play again';
            } else {
                document.getElementById('resultMessage').innerHTML = getRandomMessage(tieMessages);
            }
        }
    }
}

// Function to restart the game
function restart() {
    window.location.reload();
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
}