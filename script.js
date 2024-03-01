let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

nameChange.innerHTML = `<p>${story}</p>`

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

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
        if (playerChoice === computerChoice) {
            document.getElementById('winner').textContent = 'It\'s a tie!';
        } else if (playerChoice === 'ROCK' && computerChoice === 'PAPER') {
            document.getElementById('winner').textContent = 'Computer Wins!';
            computerScore++;
        } else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {
            document.getElementById('winner').textContent = 'Player Wins!';
            playerScore++;
        } else if (playerChoice === 'PAPER' && computerChoice === 'SCISSORS') {
            document.getElementById('winner').textContent = 'Computer Wins!';
            computerScore++;
        } else if (playerChoice === 'PAPER' && computerChoice === 'ROCK') {
            document.getElementById('winner').textContent = 'Player Wins!';
            playerScore++;
        } else if (playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
            document.getElementById('winner').textContent = 'Player Wins!';
            playerScore++;
        } else if (playerChoice === 'SCISSORS' && computerChoice === 'ROCK') {
            document.getElementById('winner').textContent = 'Computer Wins!';
            computerScore++;
        }

        // Update scores
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;


        //ends the game
        if (roundNumber === 5) {
            // Display game over message
            document.getElementById('resultMessage').textContent = 'Game Over! Click Restart to play again!!';
            // Congratulatory message
            if (playerScore > computerScore) {
                document.getElementById('resultMessage').innerHTML = 'Congratulations! You win!';
            } else if (playerScore < computerScore) {
                document.getElementById('resultMessage').innerHTML = 'Computer wins. Click to play again';
            } else {
                document.getElementById('resultMessage').innerHTML = 'It\'s a tie. Good game!';
            }
        }
    }
}

// Function to restart the game
function restart() {
    window.location.reload();
}