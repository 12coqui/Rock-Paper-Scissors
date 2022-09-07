const buttonsSelection = document.querySelectorAll('.selection')
const modal = document.querySelector('.modal')
const playerCounter = document.querySelector('.player-counter')
const computerCounter = document.querySelector('.computer-counter')
const afterComputerColumn = document.querySelector('.computer')
const restart = document.querySelector('.restart')
let pcounter = 0
let ccounter = 0

const SELECTION_OPTIONS = [
    {
        name: 'rock',
        icon: '🪨​',
        beats: 'scissors' 
    },
    {
        name: 'paper',
        icon: '​📜​​',
        beats: 'rock'
    },
    {
        name: 'scissors',
        icon: '✂️​',
        beats: 'paper' 
    }
]


buttonsSelection.forEach(buttonSelected => buttonSelected.addEventListener('click', () => 
{
    // Iteration of the array to find the same object.name with the button data-name
    const playerSelection = SELECTION_OPTIONS.find(item => item.name == buttonSelected.dataset.name)
    const computerSelection = computerSelect()
    // Check if the player or computer win comparing each other SELECTION name and beats
    const areYouWinner = checkForWinner(playerSelection, computerSelection)
    const areComputerWinner = checkForWinner(computerSelection, playerSelection)
    renderResult(computerSelection, areComputerWinner)
    renderResult(playerSelection, areYouWinner)
    if(areComputerWinner) computerCounter.textContent = ++ccounter
    if(areYouWinner) playerCounter.textContent = ++pcounter
}))


function computerSelect () {
    const index = Math.floor(Math.random() * 3)
    const computerSelection = SELECTION_OPTIONS[index]
    return computerSelection
}

function checkForWinner(player, opponentPlayer) {
   return (player.beats === opponentPlayer.name)
}

function renderResult (player, winOrLost) {
    const div = document.createElement('div');
    div.textContent = `${player.icon}`
    div.classList.add('result')
    afterComputerColumn.after(div)
    if (winOrLost) div.classList.add('winner')
}







    





















