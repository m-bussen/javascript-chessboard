class Piece {
  constructor(type, color, position) {
    this.type = type;
    this.color = color;
    this.position = position;
    this.captured = false;
    this.isSelected = false;
    this.legalMoves = [];
  }
  setPostion(pos) {
    this.position = pos;
  }
  captured() {
    this.captured = true;
  }
  setColor(color) {
    this.color = color;
  }
  setType(type) {
    this.type = type;
  }
  addMovesToLegal(moves) {
    moves.forEach((move, index) => {
      this.legalMoves[index] = move;
    });
  }
  makeMove(move) {
    console.log("legal moves: ", this.legalMoves);
    if (this.legalMoves.includes(move)) {
      this.position = move;
    }
  }
}

export default Piece;
