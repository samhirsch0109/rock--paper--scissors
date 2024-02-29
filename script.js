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
    //Evaluate the winner
    //USer Chooses Rock
    if (playerChoice === computerChoice ) {
            document.getElementById('winner').textContent = 'ties'
            roundNumber++
        } else if (playerChoice === 'rock' && computerChoice === 'paper'){
            computerScoreDisplay++
        }  else if (playerChoice === 'rock' && computerChoice === 'scissors'){
            playerScoreDisplay++
        } else if (playerChoice === 'paper' && computerChoice === 'rock'){
                computerScoreDisplay++
        } else if (playerChoice)



         // show scores
     document.getElementById('playerScoreDisplay').innerText = playerScore;
     document.getElementById('computerScoreDisplay').innerText = computerScore;
    }
    


