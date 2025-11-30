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
















function updateScore() {
    document.getElementById('scoreX').innerText = scoreX;
    document.getElementById('scoreO').innerText = scoreO;
}

