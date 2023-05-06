const play = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const index = Math.floor(Math.random() * 3);
  return play[index];
}

function playRound(playerSelection, computerSelection) {
  console.log('Player chooses ' + playerSelection);
  console.log('Computer chooses ' + computerSelection);

  if (!play.includes(playerSelection)) {
    console.log(`Invalid selection, please enter ${play[0]}, ${play[1]} or ${play[2]}`);
    return false;
  }

  const winMessage = `${playerSelection} beats ${computerSelection}, player wins!`;
  const loseMessage = `${computerSelection} beats ${playerSelection}, computer wins!`;
  const drawMessage = `Both players choose ${playerSelection}, a draw!`;

  if (playerSelection === computerSelection) {
    console.log(drawMessage);
  } else if (
    (playerSelection === play[0] && computerSelection === play[2]) ||
    (playerSelection === play[1] && computerSelection === play[0]) ||
    (playerSelection === play[2] && computerSelection === play[1])
  ) {
    console.log(winMessage);
    playerScore++;
  } else {
    console.log(loseMessage);
    computerScore++;
  }

  return true;
}

function playGameRound() {
  let playerSelection = prompt('Please enter your selection: "Rock", "Paper", or "Scissors"');
  playerSelection = playerSelection ? playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() : '';

  while (!playRound(playerSelection, computerPlay())) {
    playerSelection = prompt('Please enter a valid selection: "Rock", "Paper", or "Scissors"');
    playerSelection = playerSelection ? playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() : '';
  }

  console.log(`Player score: ${playerScore}, computer score: ${computerScore}`);
}

function game() {
  console.log('Play Game!');
  console.log('==========');

  let i = 1;

  while (i <= 5) {
    console.log(`Game ${i}`);
    console.log('--------');
    
    let playerSelection = prompt('Please enter your selection : "Rock" , "Paper" , "Scissors"');

    if (playerSelection === null) {
      console.log('Game canceled!');
      return;
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    while (!playRound(playerSelection, computerPlay())) {
      playerSelection = prompt(`Please enter a valid selection: "${play[0]}", "${play[1]}", or "${play[2]}"`);
      playerSelection = playerSelection ? playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() : '';
    }

    console.log(`Player score: ${playerScore}, computer score: ${computerScore}`);

    i++;
  }

  console.log('Game End!');

  if (playerScore === computerScore) {
    console.log('A Draw');
  } else if (playerScore > computerScore) {
    console.log('Player Wins');
  } else {
    console.log('Computer wins');
  }
}
game()