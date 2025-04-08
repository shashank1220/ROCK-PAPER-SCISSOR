let userScore = 0;
let computerScore = 0;
let drawGames = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const drawGamesPara = document.querySelector("#draw");


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    drawGames++;
    drawGamesPara.innerText = drawGames;
    msg.innerText = "GAME WAS DRAW. PLAY AGAIN!";
    msg.style.backgroundColor = "#13293D";
}; 

const showWinner = (userWin , userChoice , computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! Your ${userChoice} beats Computer ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `COMPUTER WIN! Computer ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //generate computer choice
    const computerChoice = genCompChoice();
    if (userChoice === computerChoice) {
        // draw game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors , paper
            userWin = computerChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper") {
            //scissors , rock
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            //rock ,paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , computerChoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});