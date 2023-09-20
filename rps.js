const choices = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".btn");

// Variables to keep the scores
let playerScore = 0;
let computerScore = 0;
let gamePoint = 0;

//let buttonDisabled = disableButtons();

// Disable the game buttons until the page is reloaded
const newButton = document.getElementsByClassName("btn");

buttons.forEach(button => {
  button.addEventListener("click", function playRound() {
    const playerChoice = this.id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const result = checkWinner(playerChoice, computerChoice);
    document.getElementById("result").innerText = result;

    // Keep the scores for each player
    const scores = document.querySelector('#scoreLine');
  
    scores.textContent = `Your score is: ${playerScore} and Computer's score is: ${computerScore}`;
    
  
    if (playerScore === 5) {
     alert("You win! 'play again button to restart'");
    } else if (computerScore === 5) {
      alert("Computer Wins! Click on the 'play again button to restart'");
    }
   
  });
  
});



function checkWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return `You win! You chose ${player} and computer chose ${computer}`;
  } else {
    computerScore++;
    return `Computer wins! You chose ${player} and computer choose ${computer}`;
  
  }
}


// Add event listener to the reset button
const resetButton = document.getElementById("reset").addEventListener("click", () => {
  // Reload the page to reset the game
  location.reload();
});

