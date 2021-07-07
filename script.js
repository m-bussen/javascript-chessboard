//board columns
const squareLetters = ["h", "g", "f", "e", "d", "c", "b", "a"];
squareLetters.reverse();

//board rows
const numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

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
console.log(boardgrid);
