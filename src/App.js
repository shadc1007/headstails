// initialize computer pick
// compare computer pick and user pick
// display the result and save

let scoreBoard = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0
}
let computerPick = ''
let result = ''
let wins = document.getElementById('wins');
let loses = document.getElementById('loses');
// retrieve
wins.innerText = `Wins: ${scoreBoard.wins}`
loses.innerText = `Loses: ${scoreBoard.loses}`

const pickOfComputer = () => {
    let randomNumber = Math.random()
    if (randomNumber > 0.5) {
        computerPick = 'Heads'
    } else {
        computerPick = 'Tails'
    }
}

const evaluateResult = (user) => {
    if (user === computerPick) {
        result = 'You guess correctly.'
        scoreBoard.wins += 1;
    } else {
        result = 'You guess the wrong one.'
        scoreBoard.loses += 1;
    }   

   alert(`You picked ${user}. Computer picked ${computerPick}. ${result}`)
   displayResult()
   saveTheGame()
}

const displayResult = () => {
    wins.innerText = `Wins: ${scoreBoard.wins}`
    loses.innerText = `Loses: ${scoreBoard.loses}`
    saveTheGame()
}

const resetScores = () => {
    alert('Scoreboard has been reset.')
    scoreBoard = {
        wins: 0,
        loses: 0
    }
    wins.innerText = `Wins: ${scoreBoard.wins}`
    loses.innerText = `Loses: ${scoreBoard.loses}`
    localStorage.removeItem('score')
}

const saveTheGame = () => {
    localStorage.setItem('score', JSON.stringify(scoreBoard))
}