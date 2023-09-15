let gameBoard = (() => {
    
    function createPlayer(mark) {
        return {
            mark: mark, 
    
        }
    }

    let playerX = createPlayer('X')
    let playerO = createPlayer('O')

    let activePlayer = playerX
 
let board = 
    []

for (let r = 0; r < 3; r++) {
    let row = []
    for (let c = 0; c < 3; c++) {
        row.push('')
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

function switchPlayer() {
if (activePlayer === playerX) {
    activePlayer = playerO
} else if (activePlayer === playerO) {
    activePlayer = playerX
}
}


function placeMark() {

    let cell = document.querySelectorAll('.cell')
    for (let i = 0; i < 9; i++) {
        cell[i].addEventListener('click', function() {
            if (cell[i].innerText === '') 
                cell[i].innerText = activePlayer.mark
            checkWinX()
            CheckWinO()
            checkDraw()
                switchPlayer()
        })
    }
}

let cellOne = document.getElementById('cell1')
let cellTwo = document.getElementById('cell2')
let cellThree = document.getElementById('cell3')

let cellFour = document.getElementById('cell4')
let cellFive = document.getElementById('cell5')
let cellSix = document.getElementById('cell6')

let cellSeven = document.getElementById('cell7')
let cellEight = document.getElementById('cell8')
let cellNine = document.getElementById('cell9')

function checkWinX() {
if (cellOne.textContent === 'X' && cellFour.textContent === 'X' && cellSeven.textContent === 'X') {
    alert('Player X Won!')
   } else if (cellOne.textContent === 'X' && cellTwo.textContent === 'X' && cellThree.textContent === 'X') {
    alert('Player X Won!')
   } else if (cellFour.textContent === 'X' && cellFive.textContent === 'X' && cellSix.textContent === 'X') {
    alert('Player X Won!')
}  else if (cellSeven.textContent === 'X' && cellEight.textContent === 'X' && cellNine.textContent === 'X') {
    alert('Player X Won!')
} else if (cellThree.textContent === 'X' && cellSix.textContent === 'X' && cellNine.textContent === 'X') {
    alert('Player X Won!')
} else if (cellTwo.textContent === 'X' && cellFive.textContent === 'X' && cellEight.textContent === 'X') {
    alert('Player X Won!')
} else if (cellOne.textContent === 'X' && cellFive.textContent === 'X' && cellNine.textContent === 'X') {
    alert('Player X Won!')
} else if (cellThree.textContent === 'X' && cellFive.textContent === 'X' && cellSeven.textContent === 'X') {
    alert('Player X Won!')
}

}

function CheckWinO() {
    if (cellOne.textContent === 'O' && cellFour.textContent === 'O' && cellSeven.textContent === 'O') {
        alert('Player O Won!')
       } else if (cellOne.textContent === 'O' && cellTwo.textContent === 'O' && cellThree.textContent === 'O') {
        alert('Player O Won!')
       } else if (cellFour.textContent === 'O' && cellFive.textContent === 'O' && cellSix.textContent === 'O') {
        alert('Player O Won!')
    }  else if (cellSeven.textContent === 'O' && cellEight.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player O Won!')
    } else if (cellThree.textContent === 'O' && cellSix.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player O Won!')
    } else if (cellTwo.textContent === 'O' && cellFive.textContent === 'O' && cellEight.textContent === 'O') {
        alert('Player O Won!')
    } else if (cellOne.textContent === 'O' && cellFive.textContent === 'O' && cellNine.textContent === 'O') {
        alert('Player O Won!')
    } else if (cellThree.textContent === 'O' && cellFive.textContent === 'O' && cellSeven.textContent === 'O') {
        alert('Player O Won!')
    }

}

function checkDraw() {
    if ( (cellOne.textContent.includes('X') || cellOne.textContent.includes('O')) && 
    (cellTwo.textContent.includes('X') || cellTwo.textContent.includes('O')) && 
    (cellThree.textContent.includes('X') || cellThree.textContent.includes('O')) && 
    (cellFour.textContent.includes('X') || cellFour.textContent.includes('O')) && 
    (cellFive.textContent.includes('X') || cellFive.textContent.includes('O')) && 
    (cellSix.textContent.includes('X') || cellSix.textContent.includes('O')) && 
    (cellSeven.textContent.includes('X') || cellSeven.textContent.includes('O')) && 
    (cellEight.textContent.includes('X') || cellEight.textContent.includes('O')) && 
    (cellNine.textContent.includes('X') || cellNine.textContent.includes('O')) ) {
alert('Its A Draw')
    }
}

const reset = document.getElementById('reset')
const cell = document.getElementsByClassName('cell')

reset.addEventListener('click', function() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = ''
    }
})


return {
    placeMark, 
    renderGameBoard,  
    board
}
})()



gameBoard.renderGameBoard()
gameBoard.placeMark()













