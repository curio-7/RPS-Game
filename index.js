const game = () => {
    var pScore = 0;
    var cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./imgs/${this.textContent}.png`;
                    computerHand.src = `./imgs/${computerChoice}.png`;
                }, 1000);
                //Animation
                playerHand.style.animation = "shakePlayer 0.5s ease";
                computerHand.style.animation = "shakeComputer 0.5s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "🤝It is a tie🤝";
            return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "🎉Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Bot Wins🤖";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Bot Wins🤖";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🎉Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Bot Wins🤖";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "🎉Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();