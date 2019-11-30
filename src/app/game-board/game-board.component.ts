import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// -- Peers --
import { GamePiece } from '../game-piece/game-piece';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input() gamePieces: GamePiece[] = [];

  @Input() piecePool = {};

  @Input() gameInfo = null;
 
  @Output() reset: EventEmitter<any> = new EventEmitter();

  @Output() returnToMenu: EventEmitter<any> = new EventEmitter();

  @ViewChild('gameTimer', {static: false}) gameTimer : TimerComponent;

  boardWidth = 0;

  spacesLeftToClear = 0;

  constructor() { }

  ngOnInit() {
    this.boardWidth = this.gameInfo.boardWidth;
    this.spacesLeftToClear = (this.gameInfo.rowCount * this.gameInfo.colCount) - this.gameInfo.mineCount;
  }

  onPieceClicked(gamePiece: GamePiece) {

    if (gamePiece.clicked) {
      return;
    }

    if (gamePiece.hasBomb) {
      gamePiece.triggeredBomb = true;
      this.gameOver();
      return;
    }

    if (gamePiece.adjacentCount === 0) {
      this.showAdjacentOpen(gamePiece);
    }

    gamePiece.clicked = true;
    this.checkClearCount();
  }

  checkClearCount() {
    let clickedCount = this.spacesLeftToClear;
    this.gamePieces.forEach(gamePiece => {
      if (gamePiece.clicked) {
        clickedCount--;
      }
    });

    if (clickedCount === 0) {
      this.wonTheGame();
    }
  }

  reduceClearCount() {
    this.spacesLeftToClear--;
    console.log(this.spacesLeftToClear);
  }

  onReset() {
    this.reset.emit();
    this.gameTimer.resetTimer();
    this.spacesLeftToClear = (this.gameInfo.rowCount * this.gameInfo.colCount) - this.gameInfo.mineCount;
  }

  onReturnToMenu() {
    this.returnToMenu.emit();
  }

  setBoardVisible(visibility: boolean) {
    const pieces = this.gamePieces.map(gamePiece => {
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
    // this.checkForWin()

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

  wonTheGame() {
    this.gameTimer.stopTimer();

    const pieces = this.gamePieces.map(gamePiece => {

      gamePiece.hasBomb ? gamePiece.flagPlaced = true : gamePiece.clicked = true;

      return gamePiece;
    });

    this.gamePieces = pieces;
  }

}
