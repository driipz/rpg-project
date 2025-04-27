let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3)
    if (randNum == 0) {
        return "rock"
    } else if (randNum == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const userChoice = prompt("Make your choice", "rock, paper, or scissors")
    return userChoice
}   

function playRound() {
    humanChoice = getHumanChoice().toLowerCase()
    computerChoice = getComputerChoice().toLowerCase()

    if (humanChoice != computerChoice) {
        if (humanChoice == "rock") {
            switch(computerChoice) {
                case "scissors":
                    console.log("You win! Rock beats scissors.");
                    humanScore++
                    break;
                case "paper":
                    console.log("You lose! Paper beats rock.")
                    computerScore++
                    break;
                }
            } else if (humanChoice == "paper") {
                switch(computerChoice) {
                    case "rock":
                        console.log("You win! Paper beats rock.");
                        humanScore++
                        break;
                    case "scissors":
                        console.log("You lose! Scissors beats paper.")
                        computerScore++
                        break;
                    }
            } else {
                switch(computerChoice) {
                    case "paper":
                        console.log("You win! Scissors beats paper.");
                        humanScore++
                        break;
                    case "rock":
                        console.log("You lose! Rock beats scissors.")
                        computerScore++
                        break;
                    }
            }
        } else {
            console.log(`You both chose ${humanChoice}, neither gets a point`)
        }
}

function playGame() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
    console.log(humanScore)
    console.log(computerScore)
}

playGame()