let board = ['', '', '', '', '', '', '', '', '']; //arrray for the 9 squares

let currentPlayer = 'X'; //current player

let gameOver = false; //game over flag

let scoreX = 0;
let scoreO = 0; //scores for players

function updateScore() {
    document.getElementById('scoreX').innerText = scoreX;
    document.getElementById('scoreO').innerText = scoreO;
}