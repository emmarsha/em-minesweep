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
      'height': 16,
      'width': 16,
      'mineCount': 6
    },
    'intermediate' : {
      'height': 32,
      'width': 32,
      'mineCount': 12
    },
    'advanced' : {
      'height': 64,
      'width': 64,
      'mineCount': 32
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

    console.log(this.gamePieces);
  }

  /*
  * Generate and set the board game pieces
  */ 
  buildBoard() {

    console.log('building - EM');

    for (let row = 1; row <= this.selected.width; row++) {

      for (let column = 1; column <= this.selected.height; column++) {
          const newPiece = new BoardPiece(row, column);

          this.gamePieces.push(newPiece);

          if (!this.gamePiecePool[row]) {
            this.gamePiecePool[row] = {};
          }
          this.gamePiecePool[row][column] = newPiece;
      }
    }
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
