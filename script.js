//gamboard

let gameBoard = (() => {
 
let board = 
    []

for (let r = 0; r < 3; r++) {
    let row = []
    for (let c = 0; c < 3; c++) {
        row.push('xo')
    }
    board.push(row)
}

function renderGameBoard() {
    const boardDiv = document.getElementById('gameBoardDiv')
    const rows = document.getElementsByClassName('row')
   
    for (let i = 0; i < rows.length; i++) {
const cells = rows[i].children
for (let j = 0; j < cells.length; j++) {
    if (board[i][j] !== null) {
        cells[j].innerText = board[i][j]
    } else {
        cells[j].innerText = ''
    }
}
}
}

function placeMark() {
    let cell = document.querySelectorAll('.cell')
for (let i = 0; i < 9; i++) {
    cell[i].addEventListener('click', function() {
        cell[i].innerText = playerX.mark
    }) 
    
    }
}

return {
    placeMark, 
    renderGameBoard, 
    board
}
})()

//running rendergameboard function

gameBoard.renderGameBoard()
gameBoard.placeMark()


//gameflow

let gameFlow = (() => {
    
})()


//createplayer

function createPlayer(mark) {
    return {
        mark: mark, 

    }
}

let playerX = createPlayer('X')
let playerO = createPlayer('O')

//placemark function






