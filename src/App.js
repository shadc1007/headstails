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
let resultEl = document.getElementById('resultEl')
let pickEl = document.getElementById('pickEl')
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

    resultEl.innerText = `${result}`
    pickEl.innerText = `You picked ${user}. Computer picked ${computerPick}.`

   displayResult()
   saveTheGame()
}

const displayResult = () => {
    wins.innerText = `Wins: ${scoreBoard.wins}`
    loses.innerText = `Loses: ${scoreBoard.loses}`
    saveTheGame()
}

const resetScores = () => {
    resultEl.innerText = 'The scores has been reset.'
    pickEl.innerText = ''
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