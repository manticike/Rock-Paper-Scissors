        /*
        * This function randomly returns either
        * Rock, Paper, or Scissors.
        * We'll first create a variable for the computer choice.
        * That variable will display a random number. The random number is between 0 and 1
        * The choice is
        */
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
   const winningScore = 5; // Winning score


   function checkWinner() {
    if(playerScore === winningScore) {
        console.log('Yay you Win!');
        return true;
    } else if (computerScore === winningScore) {
        console.log('Computer wins');
        return true;
    }
   }

  /* A function that accepts 2 parameters; playerSelection and computerSelection
    * And plays a round of game to determine the winner.
    * It also increases the player or computer's score
    * 
    * One thing I learnt is that you need to increase the scores before the return statements
    * */


   function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice();

    // When the player selects rock
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore +=1;
        return `You Lose! Paper beats Rock. You chose ${playerSelection} and computer chose ${computerSelection}`;  
    }
    
    else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        return `You Win! Rock Smashes Scissors. You chose ${playerSelection} and computer chose ${computerSelection}`;    
    } 
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){ 
        return `It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`;
    }

    // When the player selects Paper

    if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        playerScore +=1;
        return `You Win! Paper beats Rock. You chose ${playerSelection} and computer chose ${computerSelection}`;   
    } 
    
    else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore +=1;
        return `You Lose! Scissors cuts Paper. You chose ${playerSelection} and computer chose ${computerSelection}`;    
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {  
    return `It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`;
}

    // When the player selects Scissors

    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return `You Lose! Rock Smashes Scissors. You chose ${playerSelection} and computer chose ${computerSelection}`;
        
    } 
    
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        playerScore +=1;
        return `You Win! Scissors cuts Paper. You chose ${playerSelection} and computer chose ${computerSelection}`;     
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return `It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`;
    }
   }

   /***
    * The game function runs the game 5 times and prints out the winner at the end
    * Change the game logic to play until either the player or computer reaches 5 points
   */

   function game () {
    let counter = 0;
    while(!checkWinner())  { {

        let playerSelection = prompt("What's your selection [Rock, Paper or Scissors]? ");
    let startGame = playRound(playerSelection, getComputerChoice());

    console.log(startGame);
    
    }
    console.log(`Your Score is: ${playerScore} && Computer's score is: ${computerScore}`);
    counter++;
    } 
   
    // Output the final score line
    console.log(`Your final score is ${playerScore} and Computer's final score is ${computerScore}`);
   }
   
   // Invoke the function game()
    game();
