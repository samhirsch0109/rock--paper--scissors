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
        computerChoice = 'Scissors';
    }

    //makes the choice uppercase
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    // show choices
    document.getElementById("playerChoice").innerHTML = `<h5 class="text-center">Player Choice: ${playerChoice}</h5>`;
    document.getElementById("computerChoice").innerHTML = `<h5 class="text-center">Computer Choice: ${computerChoice}</h5>`;
    //finds the winner

    if (playerChoice === computerChoice) {
        document.getElementById('winner').textContent = 'It\'s a tie!';
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('winner').textContent = 'Computer Wins!';
        computerScore++; 
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        document.getElementById('winner').textContent = 'Computer Wins!';
        computerScore++
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        document.getElementById('winner').textContent = 'Player Wins!';
        playerScore++;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        document.getElementById('winner').textContent = 'Player Wins!';
        playerScore++;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        document.getElementById('winner').textContent = 'Player Wins!';
        playerScore++;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        document.getElementById('winner').textContent = 'Computer Wins!';
        computerScore++;
    }
    
    // Update scores
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}
