//State variables

let board = ['', '', '', '', '', '', '', '', '']; //arrray for the 9 squares
let currentPlayer = 'X'; //current player
let gameOver = false; //game over flag

let scoreX = Number(localStorage.getItem('scoreX')); 
let scoreO = Number(localStorage.getItem('scoreO'));
//retrieve score for X & O from local storage and converts the stored string into a number

const squares = document.querySelectorAll('.square'); //select all squares
const turnDisplay = document.getElementById('turnDisplay'); //display for current turn
const btnPlayAgain = document.getElementById('btnPlayAgain'); //play again button

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Function to handle a square being clicked
function handleSquareClick(index) {
    if (board[index] !== '') return; //if square is already filled, do nothing
    
    board[index] = currentPlayer; //update for move

    if (checkWin()) {
        handleWin(currentPlayer);
        return;
    } //check for win

    if (checkTie()) {
        handleTie();
        return;
    } //check for tie

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //switch player
    updateTurnDisplay(); //update turn display
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Check for a win
function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
        [0, 4, 8], [2, 4, 6]             //diagonals
    ];
    return winConditions.some(([a, b, c]) =>
        board[a] && board[a] === board[b] && board[a] === board[c]
    );
}

//check for a tie
function checkTie() {
    return board.every(square => square !== ''); //if all squares are filled
}

//function to handle a win and tie
function handleWin(player) { //player is 'X' or 'O'
    if (player === 'X') {//if X wins
        scoreX++; //increment score for X
        localStorage.setItem('scoreX', scoreX); //store updated score for X
    } else { //if O wins
        scoreO++; //increment score for O
        localStorage.setItem('scoreO', scoreO); //store updated score for O
    }

    updateScore(); //update score display
    alert(`Player ${player} wins!`); //alert winner
}

//function to reset the board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', '']; //reset board
    currentPlayer = 'X'; //reset current player
    squares.forEach(square => square.innerText = ''); //clear square display
    updateTurnDisplay(); //update turn display
}
/////////////////////////////////////////////////////////////////////////////////////
//event listeners for squares and scoreboard response
function initSquares() {
    squares.forEach((square, index) => {
        square.addEventListener('click', () => handleSquareClick(index));
    });
}
/////////////////////////////////////////////////////////////////////////////////////










function updateScore() {
    document.getElementById('scoreX').innerText = scoreX;
    document.getElementById('scoreO').innerText = scoreO;
}

