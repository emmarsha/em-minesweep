import { Component, OnInit } from '@angular/core';

// -- Peers --
import { GamePiece } from '../game-piece/game-piece';

@Component({
  selector: 'app-em-minesweep',
  templateUrl: './em-minesweep.component.html',
  styleUrls: ['./em-minesweep.component.css']
})
export class EmMinesweepComponent implements OnInit {

  public selected = null;

  public displayMenu = true;

  private gamePiecePool = {};

  private gamePieces = [];

  levels = {
    'beginner' : {
      'colCount': 9,
      'rowCount': 9,
      'mineCount': 10,
      'boardWidth': '324px'
    },
    'intermediate' : {
      'colCount': 16,
      'rowCount': 16,
      'mineCount': 40,
      'boardWidth': '577px'
    },
    'advanced' : {
      'colCount': 24,
      'rowCount': 24,
      'mineCount': 80,
      'boardWidth': '899px'
    },        
  }

  constructor() { }

  ngOnInit() {
  }

  /*
  * Start the game
  */ 
  startGame(difficulty: string) {
    this.selected = this.levels[difficulty];
    this.buildBoard();
    this.placeMines();
    this.setAdjacentMinesCount();

    this.displayMenu = false;
  }

  /*
  * Generate and set the board game pieces
  */ 
  buildBoard() {

    const pieces = []

    for (let row = 1; row <= this.selected.rowCount; row++) {

      for (let column = 1; column <= this.selected.colCount; column++) {
          const newPiece = new GamePiece(row, column);

          pieces.push(newPiece);

          if (!this.gamePiecePool[row]) {
            this.gamePiecePool[row] = {};
          }
          this.gamePiecePool[row][column] = newPiece;
      }
    }

    this.gamePieces = pieces;
  }

  /*
  * Place the mines on the board
  */ 
  placeMines() {

    let placedCount = 0;

    while (placedCount !== this.selected.mineCount) {

      const row = Math.floor(Math.random() * (this.selected.rowCount - 1) + 1);
      const column = Math.floor(Math.random() * (this.selected.colCount - 1) + 1);

      if (!this.gamePiecePool[row][column].hasBomb) {
        this.gamePiecePool[row][column].hasBomb = true;
        placedCount++;
      }
    }
  }

  /*
  * Get the count of mines surrounding each board piece
  */
  private setAdjacentMinesCount() {

    this.gamePieces.forEach(gamePiece => {
      this.countMines(gamePiece);
    });

  }

  /*
  * Check for mines directly next to a given game piece
  */
  private countMines(gamePiece: GamePiece) {
    let mineCount = 0;

    let rowStart = (gamePiece.row - 1) < 1  ? 1 : gamePiece.row - 1;
    let rowEnd = (gamePiece.row + 1) > this.selected.rowCount  ? this.selected.rowCount : gamePiece.row + 1;
    
    let colStart = (gamePiece.column - 1) < 1  ? 1 : gamePiece.column - 1;
    let colEnd = (gamePiece.column + 1) > this.selected.colCount  ? this.selected.colCount : gamePiece.column + 1;

    for (let row = rowStart; row <= rowEnd; row++) {
      for (let column = colStart; column <= colEnd; column++) {
        if (this.gamePiecePool[row][column].hasBomb) {
          mineCount++;
        }
      }
    }

    gamePiece.adjacentCount = mineCount;
  }

  /*
  * Reset the board with fresh randomized values
  */
  reset() {

    this.clearBoard();

    this.buildBoard();
    this.placeMines();
    this.setAdjacentMinesCount();
  }

  returnToMenu() {
    this.clearBoard();
    this.displayMenu = true;
  }

  clearBoard() {
    this.gamePieces = [];
    this.gamePiecePool = {};  
  }

}
