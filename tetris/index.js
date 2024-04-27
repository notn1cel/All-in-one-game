const gameBoard = document.getElementById('game-board');
const ROWS = 20;
const COLS = 10;
const board = [];

// Create game board
for (let i = 0; i < ROWS; i++) {
  const row = [];
  for (let j = 0; j < COLS; j++) {
    const block = document.createElement('div');
    block.classList.add('block');
    gameBoard.appendChild(block);
    row.push(block);
  }
  board.push(row);
}

// Tetris pieces
const pieces = [
  [[1, 1, 1],
   [0, 1, 0]],

  [[1, 1, 1, 1]],

  [[1, 1, 0],
   [0, 1, 1]],

  [[0, 1, 1],
   [1, 1, 0]],

  [[1, 1],
   [1, 1]]
];

// Function to draw a piece on the board
function drawPiece(piece, x, y) {
  piece.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) {
        board[y + i][x + j].style.background = '#000';
      }
    });
  });
}

// Function to clear a piece from the board
function clearPiece(piece, x, y) {
  piece.forEach((row, i) => {
    row.forEach((val, j) => {
      if (val === 1) {
        board[y + i][x + j].style.background = '#ccc';
      }
    });
  });
}

// Randomly select a piece
function randomPiece() {
  const idx = Math.floor(Math.random() * pieces.length);
  return pieces[idx];
}

// Game loop
let currentPiece = randomPiece();
let currentX = 3;
let currentY = 0;

function dropPiece() {
  clearPiece(currentPiece, currentX, currentY);
  currentY++;
  drawPiece(currentPiece, currentX, currentY);
  setTimeout(dropPiece, 1000);
}

dropPiece();

