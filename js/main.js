/*----- constants -----*/

GRID = [1, 2, 3, 4, 5, 6, 7, 8, 9]


/*----- app's state (variables) -----*/

let choicesMade; //feeds who's turn and potential
let activeClicker = null;
let gameStatus = null;
const winningCombos = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0 };

/*----- cached element references -----*/



/*----- event listeners -----*/

document.querySelector('div').addEventListener('click', handleChoice)
document.querySelector('button').addEventListener('click', handleButton)

/*----- functions -----*/

//reset everything
function init () {
    //reset all state
    playerXChoices = [];
    playerOChoices = [];
    choicesMade = [];
    winningCombos = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0 };
}



function handleChoice(evt) {
    if (evt.target.id === 'grid') return;
    console.log(evt.target.textContent);
    getGameStatus();
    
}
function handleButton(evt) {
    console.log('This will run init');
}



function getGameStatus () {
    for (let property in winningCombos) {
        if (property === 3) {  
            gameStatus = 'x won';
            return;
        }
        if (property === -3) {
            gameStatus = 'o won';
            return;
        }
        if (choicesMade === 9) {
            gameStatus = 'tie';
            return;
        }
      }
}