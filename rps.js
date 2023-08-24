   /*  * This function randomly returns either
        * Rock, Paper, or Scissors.
        * We'll first create a variable for the computer choice.
        * That variable will display a random number. The random number is between 0 and 1
        * The choice is */

   function getComputerChoice() {
    let computerChoice = (Math.floor (Math.random() * 3) +1);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } 
    else if (computerChoice === 2) {
        computerChoice = "paper";
   }
   else if (computerChoice === 3) {
    computerChoice = "scissors"
   }
   return computerChoice;
}  

let playerScore = 0; // Player's score
let computerScore = 0; // Computer's score
const winningScore = 5; // Winning score. Thi


// The function will check if the player's or computer's score is 
function checkWinner() {
 if(playerScore === winningScore) {
     console.log('Yay you Win!');
     return true;
 } else if (computerScore === winningScore) {
     console.log('Computer wins');
     return true;
 }
}

let scoreLine = document.getElementById('gameResults'); // Set a variable to the div in the html. This get a reference to the 'gameResults' div element

let playerParagraph = document.createElement('p'); // Create a new paragraph for the players score

// Create a new paragraph for the computer score
let computerParagraph = document.createElement('p');

// a variable for when the player clicks on the rock button
const rockButton = document.getElementById('rock'); 

// Function to modify when the player click on the Rock button
function playRound(playerSelection, computerSelection) {
    playerSelection = rockButton;
    computerSelection = getComputerChoice();

    if (playerSelection && computerSelection === "paper") {
        computerScore +=1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`; // Displays player's score on screen
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`; // Displays computer's score on screen
    }
    else if (playerSelection && computerSelection === "scissors") {
        playerScore += 1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
    else {
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
}

// Function to modify when the player clicks on the paper button

const paperButton = document.getElementById('paper');

function playRound(playerSelection, computerSelection) {
    playerSelection = paperButton;
    computerSelection = getComputerChoice();

    if (playerSelection && computerSelection === "scissors") {
        computerScore +=1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
    else if (playerSelection && computerSelection === "rock") {
        playerScore += 1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
    else {
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
}

// a variable for the scissors button id
const scissorsButton = document.getElementById('scissors');

// Function to modify when the player clicks on the scissors button
function playRound(playerSelection, computerSelection) {
    playerSelection = scissorsButton;
    computerSelection = getComputerChoice();

    if (playerSelection && computerSelection === "rock") {
        computerScore +=1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
    else if (playerSelection && computerSelection === "paper") {
        playerScore += 1;
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
    else {
        playerParagraph.textContent = `Your Score is: ${playerScore}`;
        computerParagraph.textContent = `The Computer's Score is: ${computerScore}`;
    }
}

// Append the newly created paragraphs to the 'gameResults' div
scoreLine.appendChild(playerParagraph);
scoreLine.appendChild(computerParagraph);

// Listen for click events for all the buttons
rockButton.addEventListener('click',playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
