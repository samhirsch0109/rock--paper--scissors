//asks for name
let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

nameChange.innerHTML = `<p>${story}</p>`
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

//get computer choice
function playGame(playerChoice) {
    // Get Computer Choice
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = 'Rock';
    } else if (randomNumber === 1) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissor';
    }

    //makes the choice uppercase
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    // show choices
    document.getElementById("playerChoice").innerHTML = `<h5 class="text-center">Player Choice: ${playerChoice}</h5>`;
    document.getElementById("computerChoice").innerHTML = `<h5 class="text-center">Computer Choice: ${computerChoice}</h5>`;

 // Display round number
 document.getElementById('roundNumber').innerText = `Round ${++roundNumber}`;
}

// Function to update scores and display result message
function updateScores() {
 if (playerChoice === computerChoice) {
     document.getElementById('resultMessage').innerText = "It's a tie!";
 } else if (
     (playerChoice === 'rock' && computerChoice === 'scissors') 
     (playerChoice === 'paper' && computerChoice === 'rock') 
     (playerChoice === 'scissors' && computerChoice === 'paper')
 ) {
     document.getElementById('resultMessage').innerText = 'You win!';
     playerScore++;
 } else {
     document.getElementById('resultMessage').innerText = 'Computer wins!';
     computerScore++;
 }

 // Display scores
 document.getElementById('playerScoreDisplay').innerText = playerScore;
 document.getElementById('computerScoreDisplay').innerText = computerScore;
}
