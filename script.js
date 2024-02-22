//asks for name
let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

nameChange.innerHTML = `<p>${story}</p>`


function playRound(playerChoice){
 //Get Computer Choice
 const randomNumber = Math.floor(Math.random()*3);
 if (randomNumber === 1) {
     computerChoice = 'Rock'
 }
 else if (randomNumber === 2) {
     computerChoice = 'Paper'
 }
 else  {
     computerChoice = 'Scissor'
 }
//Display Selections

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
} 