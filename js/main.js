/*----- constants -----*/

GRID = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*----- app's state (variables) -----*/

let choicesMade; //feeds who's turn and potential
let turnStatus = 0;
let gameStatus = null;
const winningCombos = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0, seven: 0, eight: 0};

/*----- cached element references -----*/

const resetBtn = document.getElementById('reset');

/*----- event listeners -----*/

document.querySelector('div').addEventListener('click', handleChoice);
document.querySelector('button').addEventListener('click', handleButton);

/*----- functions -----*/

//reset everything
function init () {
    //1. reset all state
    turnStatus = 0;
    choicesMade = [];
    gameStatus = null;
    winningCombos = {one: 0, two: 0, three: 0, four: 0,  five: 0, six: 0, seven: 0, eight: 0};
}

function handleChoice(evt) {
    //only allows correct clicks
    if (evt.target.id === 'grid') return;

    console.log(evt.target.id); //testing grid response
    console.log(gameStatus);
    console.log(turnStatus);

    if (turnStatus % 2 === 0) 
        if (evt.target.id === grid1) {
            winningCombos.one += 1;
            winningCombos.four += 1;
            winningCombos.seven += 1;
        } else if (evt.target.id === grid2) {
            winningCombos.two += 1;
            winningCombos.four += 1;
        } else if (evt.target.id === grid3) {
            winningCombos.eight += 1;
            winningCombos.four += 1;
            winningCombos.three += 1;
        } else if (evt.target.id === grid4) {
            winningCombos.one += 1;
            winningCombos.five += 1;
        } else if (evt.target.id === grid5) {
            winningCombos.two += 1;
            winningCombos.five += 1;
            winningCombos.seven += 1;
            winningCombos.eight += 1;
        } else if (evt.target.id === grid6) {
            winningCombos.three += 1;
            winningCombos.five += 1;
        } else if ( evt.target.id === grid7 ) {
            winningCombos.eight += 1;
            winningCombos.one += 1;
            winningCombos.six += 1;
        } else if (evt.target.id === grid8) {
            winningCombos.two += 1;
            winningCombos.six += 1;
        } else if (evt.target.id === grid9) {
            winningCombos.three += 1;
            winningCombos.seven += 1;
            winningCombos.six += 1;
        }
    if (turnStatus % 2 !== 0) 
        if (evt.target.id === grid1) {
            winningCombos.one -= 1;
            winningCombos.four -= 1;
            winningCombos.seven -= 1;
        } else if (evt.target.id === grid2) {
            winningCombos.two -= 1;
            winningCombos.four -= 1;
        } else if (evt.target.id === grid3) {
            winningCombos.eight -= 1;
            winningCombos.four -= 1;
            winningCombos.three -= 1;
        } else if (evt.target.id === grid4) {
            winningCombos.one -= 1;
            winningCombos.five -= 1;
        } else if (evt.target.id === grid5) {
            winningCombos.two -= 1;
            winningCombos.five -= 1;
            winningCombos.seven -= 1;
            winningCombos.eight -= 1;
        } else if (evt.target.id === grid6) {
            winningCombos.three -= 1;
            winningCombos.five -= 1;
        } else if ( evt.target.id === grid7 ) {
            winningCombos.eight -= 1;
            winningCombos.one -= 1;
            winningCombos.six -= 1;
        } else if (evt.target.id === grid8) {
            winningCombos.two -= 1;
            winningCombos.six -= 1;
        } else if (evt.target.id === grid9) {
            winningCombos.three -= 1;
            winningCombos.seven -= 1;
            winningCombos.six -= 1;
        }
        
        




    updateGameStatus();
    turnStatus += 1;
    console.log(winningCombos); //testing that we're adding things
    
}

function updateGameStatus () {
    for (let property in winningCombos) {
        if (property === 3) {  
            gameStatus = 'x won';
            return;
        }
        if (property === -3) {
            gameStatus = 'o won';
            return;
        }
        if (turnStatus === 8) {
            gameStatus = 'tie';
            return;
        }
      }
}

function handleButton(evt) {
    console.log('This will run init');
}