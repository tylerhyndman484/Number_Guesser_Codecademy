let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
   return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, secretTargetNumber) => {
    const targetNumber = generateTarget();
    const humanDifference = Math.abs(targetNumber - human);
    const computerDifference = Math.abs(targetNumber - computer);
    if (humanDifference < computerDifference || humanDifference === computerDifference) {
        return true;
    } else if (computerDifference < humanDifference) {
        return false;
    }
}