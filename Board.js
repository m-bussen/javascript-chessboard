import Piece from "./Piece.js";

//board columns
const squareLetters = ["h", "g", "f", "e", "d", "c", "b", "a"];
squareLetters.reverse();

//board rows
const numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

const whitePieces = [
  ["King", "w", "e1"],
  ["Queen", "w", "d1"],
  ["Rook", "w", "e1"],
  ["Rook", "w", "d1"],
  ["Bishop", "w", "e1"],
  ["Bishop", "w", "d1"],
  ["Knight", "w", "e1"],
  ["Knight", "w", "d1"],
  ["pawn", "w", "a2"],
  ["pawn", "w", "b2"],
  ["pawn", "w", "c2"],
  ["pawn", "w", "d2"],
  ["pawn", "w", "e2"],
  ["pawn", "w", "f2"],
  ["pawn", "w", "g2"],
  ["pawn", "w", "h2"],
];

const blackPieces = [
  ["King", "b", "e1"],
  ["Queen", "b", "d1"],
  ["Rook", "b", "e1"],
  ["Rook", "b", "d1"],
  ["Bishop", "b", "e1"],
  ["Bishop", "b", "d1"],
  ["Knight", "b", "e1"],
  ["Knight", "b", "d1"],
  ["pawn", "b", "a2"],
  ["pawn", "b", "b2"],
  ["pawn", "b", "c2"],
  ["pawn", "b", "d2"],
  ["pawn", "b", "e2"],
  ["pawn", "b", "f2"],
  ["pawn", "b", "g2"],
  ["pawn", "b", "h2"],
];

const pieces = [];

const createBoard = () => {
  // select grid
  const boardgrid = document.querySelector(".board-grid");

  // square toggle background class color
  let blackOrWhite = false;

  // iterate thru columns and rows
  // create squares as new divs and insert them into boardgrid
  for (let row = 0; row < 8; row++) {
    blackOrWhite = !blackOrWhite;
    for (let column = 0; column < 8; column++) {
      let currSquare = squareLetters[column] + numbers[row];
      let newSquare = document.createElement("div");
      newSquare.setAttribute("id", currSquare);
      newSquare.classList.add("square");
      newSquare.innerText = currSquare;
      if (blackOrWhite === false) {
        newSquare.classList.add("black");
      }
      boardgrid.insertAdjacentElement("beforeend", newSquare);
      blackOrWhite = !blackOrWhite;
    }
  }
};

const createPieces = () => {
  const white = whitePieces.map((piece, index) => {
    let newPiece = new Piece(piece[0], piece[1], piece[2]);
    console.log("new pieces obj:", newPiece);
    pieces.push(newPiece);
  });
  const black = blackPieces.map((piece, index) => {
    let newPiece = new Piece(piece[0], piece[1], piece[2]);
    console.log("new pieces obj:", newPiece);
  });
};

// START OF MAIN ----------------------------------------

createBoard();
createPieces();

console.log(pieces[0]);

// Add insert pieces

// Add event listeners to pieces
