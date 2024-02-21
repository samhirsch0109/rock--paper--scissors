//asks for name
let name = prompt('Enter your name:')

let story = ` Player Name: <b> ${name} </b>`

nameChange.innerHTML = `<p>${story}</p>`

  function playGame(userSelection) {
  const randomNumber = Math.floor(Math.random()*3);
   if (randomNumber === 1) {
    computerChoice = 'rock'
   }
   else if ( randomNumber === 2){
    computerChoice = 'paper'
   }
  else (randomNumber === 3){
    computerChoice = 'scissors'
  }

  document.getElementById('computerChoice').textContent = computerChoice
  document.getElementById('playerChoice').textContent = playerChoice
  }