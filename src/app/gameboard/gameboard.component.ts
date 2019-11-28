import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// -- Peers --
import { GamePiece } from '../game-piece/game-piece';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() gamePieces: GamePiece[] = [];

  @Input() piecePool = {};

  @Input() gameInfo = null;
 
  @Output() reset: EventEmitter<any> = new EventEmitter();

  @Output() returnToMenu: EventEmitter<any> = new EventEmitter();

  @ViewChild('gameTimer', {static: false}) gameTimer : TimerComponent;

  boardWidth = 0;

  constructor() { }

  ngOnInit() {
    this.boardWidth = this.gameInfo.boardWidth;
  }

  onReset() {
    this.reset.emit();
    this.gameTimer.resetTimer();
  }

  onReturnToMenu() {
    this.returnToMenu.emit();
  }

  setBoardVisible(visibility: boolean) {
    const pieces = this.gamePieces.map(gamePiece => {
      gamePiece.flagPlaced = false;
      gamePiece.clicked = visibility;
      return gamePiece;
    });

    this.gamePieces = pieces;
  }

  gameOver() {
    this.gameTimer.stopTimer();
    this.setBoardVisible(true);
  }

  showAdjacentOpen(gp: GamePiece) {
    this.floodFill(gp.row, gp.column);
  }

  floodFill(row: number, column: number) {
    // Are we on the board?
    if (row === 0 || row > this.gameInfo.rowCount || column === 0 || column > this.gameInfo.colCount) {
      return;
    }

    const gamePiece = this.piecePool[row][column];

    // Already clicked, has a bomb or a flag
    if (gamePiece.clicked || gamePiece.hasBomb || gamePiece.flagPlaced) {
      return;
    }

    gamePiece.clicked = true;

    // Found the outer edge of the blank space
    if (gamePiece.adjacentCount > 0) {
      return;
    }

    this.floodFill(row + 1, column);  // north
    this.floodFill(row + 1, column + 1);  // north east
    this.floodFill(row, column + 1);  // east
    this.floodFill(row - 1, column + 1);  // south east
    this.floodFill(row - 1, column);  // south
    this.floodFill(row - 1, column - 1);  // south west
    this.floodFill(row, column - 1);  // west
    this.floodFill(row + 1, column - 1);  // north west
  }

}
