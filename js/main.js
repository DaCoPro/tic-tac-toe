/*----- constants -----*/
/*----- app's state (variables) -----*/

let turnStatus = 0;
let gameStatus = null;
let winningCombos = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0};

/*----- cached element references -----*/

const resetBtn = document.getElementById('reset');
const gridSquares = document.querySelectorAll('div > div');

/*----- event listeners -----*/

document.querySelector('div').addEventListener('click', handleChoice);
document.querySelector('button').addEventListener('click', handleButton);

/*----- functions -----*/

init();

function init () {
    usedQuares = [];
    turnStatus = 0;
    gameStatus = null;
    winningCombos = {one: 0, two: 0, three: 0, four: 0,  five: 0, six: 0, seven: 0, eight: 0};
    render();
    renderBoard();
}

function handleChoice(evt) {
    if (evt.target.id === 'grid') return;
    if (evt.target.textContent === 'O' || evt.target.textContent === 'X') return;
    if (gameStatus) return;
    if (turnStatus % 2 === 0) 
        if (evt.target.id === 'grid1') {
            winningCombos.one += 1;
            winningCombos.four += 1;
            winningCombos.seven += 1;
            document.getElementById('grid1').innerHTML = 'X';
        } else if (evt.target.id === 'grid2') {
            winningCombos.two += 1;
            winningCombos.four += 1;
            document.getElementById('grid2').innerHTML = 'X';
        } else if (evt.target.id === 'grid3') {
            winningCombos.eight += 1;
            winningCombos.four += 1;
            winningCombos.three += 1;
            document.getElementById('grid3').innerHTML = 'X';
        } else if (evt.target.id === 'grid4') {
            winningCombos.one += 1;
            winningCombos.five += 1;
            document.getElementById('grid4').innerHTML = 'X';
        } else if (evt.target.id === 'grid5') {
            winningCombos.two += 1;
            winningCombos.five += 1;
            winningCombos.seven += 1;
            winningCombos.eight += 1;
            document.getElementById('grid5').innerHTML = 'X';
        } else if (evt.target.id === 'grid6') {
            winningCombos.three += 1;
            winningCombos.five += 1;
            document.getElementById('grid6').innerHTML = 'X';
        } else if ( evt.target.id === 'grid7' ) {
            winningCombos.eight += 1;
            winningCombos.one += 1;
            winningCombos.six += 1;
            document.getElementById('grid7').innerHTML = 'X';
        } else if (evt.target.id === 'grid8') {
            winningCombos.two += 1;
            winningCombos.six += 1;
            document.getElementById('grid8').innerHTML = 'X';
        } else if (evt.target.id === 'grid9') {
            winningCombos.three += 1;
            winningCombos.seven += 1;
            winningCombos.six += 1;
            document.getElementById('grid9').innerHTML = 'X';
        }
    if (turnStatus % 2 !== 0) 
        if (evt.target.id === 'grid1') {
            winningCombos.one -= 1;
            winningCombos.four -= 1;
            winningCombos.seven -= 1;
            document.getElementById('grid1').innerHTML = 'O';
        } else if (evt.target.id === 'grid2') {
            winningCombos.two -= 1;
            winningCombos.four -= 1;
            document.getElementById('grid2').innerHTML = 'O';
        } else if (evt.target.id === 'grid3') {
            winningCombos.eight -= 1;
            winningCombos.four -= 1;
            winningCombos.three -= 1;
            document.getElementById('grid3').innerHTML = 'O';
        } else if (evt.target.id === 'grid4') {
            winningCombos.one -= 1;
            winningCombos.five -= 1;
            document.getElementById('grid4').innerHTML = 'O';
        } else if (evt.target.id === 'grid5') {
            winningCombos.two -= 1;
            winningCombos.five -= 1;
            winningCombos.seven -= 1;
            winningCombos.eight -= 1;
            document.getElementById('grid5').innerHTML = 'O';
        } else if (evt.target.id === 'grid6') {
            winningCombos.three -= 1;
            winningCombos.five -= 1;
            document.getElementById('grid6').innerHTML = 'O';
        } else if ( evt.target.id === 'grid7' ) {
            winningCombos.eight -= 1;
            winningCombos.one -= 1;
            winningCombos.six -= 1;
            document.getElementById('grid7').innerHTML = 'O';
        } else if (evt.target.id === 'grid8') {
            winningCombos.two -= 1;
            winningCombos.six -= 1;
            document.getElementById('grid8').innerHTML = 'O';
        } else if (evt.target.id === 'grid9') {
            winningCombos.three -= 1;
            winningCombos.seven -= 1;
            winningCombos.six -= 1;
            document.getElementById('grid9').innerHTML = 'O';
        }
    updateGameStatus();
    turnStatus += 1;
    render();
}

function render () {
    renderMessage();
    resetBtn.style.visibility = gameStatus ? 'visible' : 'hidden';
}

/*-------secondary functions below-------------------------------------------------*/

function updateGameStatus () {
   if (turnStatus === 8) gameStatus = 'tie';
   if (winningCombos.one === 3 || winningCombos.two === 3 || 
    winningCombos.three === 3 || winningCombos.four === 3 || 
    winningCombos.five === 3 || winningCombos.six === 3 || 
    winningCombos.seven === 3 || winningCombos.eight === 3) {
    gameStatus = 'x';
   }
   if (winningCombos.one === -3 || winningCombos.two === -3 || 
    winningCombos.three === -3 || winningCombos.four === -3 || 
    winningCombos.five === -3 || winningCombos.six === -3 || 
    winningCombos.seven === -3 || winningCombos.eight === -3) {
    gameStatus = 'o';
   }
}

function handleButton() {
    init();
}

function renderMessage () {
    let message = null;
    if (gameStatus === null) 
        if (turnStatus % 2 === 0) {
            message = "X's turn";
        } else if (turnStatus % 2 !== 0) {
            message = "O's turn";
        }
    if (gameStatus === 'x') {
        message = "X Wins!";
    }
    if (gameStatus === 'o') {
        message = "O Wins!";
    }
    if (gameStatus === 'tie') {
        message = "It was a tie!";
    }
    document.querySelector('h2').innerHTML = message;
}

function renderBoard () {
gridSquares.forEach(function(square) {
    square.innerHTML = '';
});
}