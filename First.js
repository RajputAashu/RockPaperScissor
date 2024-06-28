let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");

const genCompChoice = () => {
    const option = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw! Paly game";
    msg.style.backgroundColor = "grey";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOu Win");
        msg.innerText = 'You Win!';
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        console.log("You Lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    if (userChoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});