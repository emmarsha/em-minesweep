import { Component, OnInit } from '@angular/core';

// -- Peers --
import { BoardPiece } from '../boardpiece/boardpiece';

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
      'height': 9,
      'width': 9,
      'mineCount': 10
    },
    'intermediate' : {
      'height': 16,
      'width': 16,
      'mineCount': 40
    },
    'advanced' : {
      'height': 24,
      'width': 24,
      'mineCount': 80
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

    this.displayMenu = false;

    console.log(this.gamePieces);
  }

  /*
  * Generate and set the board game pieces
  */ 
  buildBoard() {

    console.log('building - EM');
    const pieces = []

    for (let row = 1; row <= this.selected.width; row++) {

      for (let column = 1; column <= this.selected.height; column++) {
          const newPiece = new BoardPiece(row, column);

          pieces.push(newPiece);

          if (!this.gamePiecePool[row]) {
            this.gamePiecePool[row] = {};
          }
          this.gamePiecePool[row][column] = newPiece;
      }
    }

    this.gamePieces = pieces;

  }

  placeMines() {

    console.log('placing - EM');

    let placedCount = 0;

    while (placedCount !== this.selected.mineCount) {

      const row = Math.floor(Math.random() * (this.selected.width - 1) + 1);
      const column = Math.floor(Math.random() * (this.selected.height - 1) + 1);

      if (!this.gamePiecePool[row][column].hasBomb) {
        this.gamePiecePool[row][column].hasBomb = true;
        console.log('bomb placed - EM');
        placedCount++;
      }
    }
  }



}
