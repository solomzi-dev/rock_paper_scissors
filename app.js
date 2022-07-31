function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `It's a tie.`;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return `You win! Rock beats Scissors.`;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return `You win! Paper beats Rock.`;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return `You win! Scissors beats Paper.`;
    } else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors') {
        return `You lose! Rock beats Scissors.`;
    } else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock') {
        return `You lose! Paper beats Rock.`;
    } else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        return `You lose! Scissors beat Paper.`;
    } else {
        return 'Invalid input';
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))