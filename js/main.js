/*----- constants -----*/

GRID = [1, 2, 3, 4, 5, 6, 7, 8, 9]


/*----- app's state (variables) -----*/

const playerXChoices = [];
const playerOChoices = [];
const choicesMade = [];
const winningCombos = [[],[],[],[],[],[],[],[]];

/*----- cached element references -----*/



/*----- event listeners -----*/

document.querySelector('div').addEventListener('click', handleChoice)
document.querySelector('button').addEventListener('click', handleButton)

/*----- functions -----*/

//this will reset the grid
function init () {
    //reset all state
    playerXChoices = [];
    playerOChoices = [];
    choicesMade = [];
    winningCombos = [[],[],[],[],[],[],[],[]]
}



function handleChoice(evt) {
    if (evt.target.id === 'grid') return;
    console.log(evt.target.textContent);
    
}
function handleButton(evt) {
    console.log('This will run init');
}