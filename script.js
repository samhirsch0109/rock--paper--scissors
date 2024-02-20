//asks for name
let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

let madLibOutputDiv = document.getElementById('nameChange')

nameChange.innerHTML = `<p>${story}</p>`

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const maxRounds = 6;
const roundResults = []; 

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const roundNumberDisplay = document.getElementById("roundNumber");
