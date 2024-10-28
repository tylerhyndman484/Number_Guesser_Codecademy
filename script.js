let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (humanGuess > 9 || humanGuess < 0) {
        alert('Guess is invalid. Try 0-9.');
        return; 
    } 
    
    if (getAbsoluteDistance(humanGuess, targetNumber) < getAbsoluteDistance(computerGuess, targetNumber) || getAbsoluteDistance(humanGuess, targetNumber) === getAbsoluteDistance(computerGuess, targetNumber)) {
        return true;
    } else if (getAbsoluteDistance(humanGuess, targetNumber) > getAbsoluteDistance(computerGuess, targetNumber)) {
        return false;
    }
}



const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++
}
