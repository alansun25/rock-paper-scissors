const body = document.querySelector('body');

const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
const playerWin = document.querySelector('#playerScore');
const computerWin = document.querySelector('#computerScore');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();

        let round = playRound(playerSelection, computerSelection);
        if (round === 1) {
            playerScore++;
            playerWin.textContent = playerScore;
        }
        else if (round === -1) {
            computerScore++;
            computerWin.textContent = computerScore;
        }

        if (playerScore === 5) {
            const result = document.createElement('p');
            result.textContent = "You win!";
            result.style.color = "blue";
            body.appendChild(result);
            body.appendChild(playAgain);
        } 
        else if (computerScore === 5) {
            const result = document.createElement('p');
            result.textContent = "You lose...";
            result.style.color = "red";
            body.appendChild(result);
            body.appendChild(playAgain);
        }
    })
})

const playAgain = document.createElement('button');
playAgain.textContent = "Play again"
playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerWin.textContent = playerScore;
    computerWin.textContent = computerScore;
    // remove the play again button and the result text
    body.removeChild(body.lastChild);
    body.removeChild(body.lastChild);
});

function computerPlay() {
    let play = Math.floor(Math.random() * 3); // return 0, 1, or 2
    if (play === 0) {
        console.log("Computer's move: rock");
        return "rock";
    } 
    else if (play === 1) {
        console.log("Computer's move: paper");
        return "paper";
    }
    
    console.log("Computer's move: scissors");
    return "scissors";
}

function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        return 0;
    }
    else if ((player === "rock" && computer === "scissors") 
            || (player === "paper" && computer === "rock") 
            || (player == "scissors" && computer === "paper")) {
        return 1; // win
    }
        
    return -1; // lose
}
