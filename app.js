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

function game() {
    let playerScore = 0;
    let computerScore = 0;    
    for(let i = 0; i < 5; i++) {
        let playerInput = prompt('Enter your choice.');
        if(playRound(playerInput, getComputerChoice()).includes('win')) {
            console.log('Player wins');
            playerScore++;
        } else if(playRound(playerInput, getComputerChoice()).includes('lose')) {
            console.log('Computer wins');
            computerScore++;
        } else if(playRound(playerInput, getComputerChoice()).includes('tie')) {
            console.log(`It's a tie`);
        } else {
            console.log('Invalid input');
        }
    }
    if(playerScore > computerScore) {
        alert(`Player wins by ${playerScore} - ${computerScore}`)
    } else if(computerScore > playerScore) {
        alert(`Computer wins by ${computerScore} - ${playerScore}`)
    } else {
        alert(`It's a tie`);
    }
}