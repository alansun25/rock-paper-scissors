function computerPlay() {
    let play = Math.floor(Math.random() * 3); // return 0, 1, or 2
    console.log(`play: ${play}`)
    if (play === 0) return "rock";
    else if (play === 1) return "paper";
    return "scissors";
}

function playRound(player, computer) {
    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
        return "tie!";
    }
    else if ((player === "rock" && computer === "scissors") 
            || (player === "paper" && computer === "rock") 
            || (player == "scissors" && computer === "paper")) {
        return `you win! ${player} beats ${computer}`;
    }
    else {
        return `you lose... ${computer} beats ${player}`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let computer = computerPlay();
        let player = prompt("Enter your move:");

        if (player === null) return;
        while (player !== "rock" && player !== "paper" && player !== "scissors") {
            player = prompt("Invalid move. Pleases try again:");
            if (player === null) return;
        }

        let round = playRound(player, computer);
        if (round.includes("win")) playerScore++;
        else if (round.includes("lose")) computerScore++;
        console.log(round);
    }
    console.log(`${playerScore}, ${computerScore}`);
    
    if (playerScore > computerScore) console.log("You win!");
    else if (computerScore > playerScore) console.log("You lose :(");
    else console.log("You tied.");
}