import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// -- Peers --
import { GamePiece } from './game-piece';

@Component({
  selector: 'app-game-piece',
  templateUrl: './game-piece.component.html',
  styleUrls: ['./game-piece.component.css']
})
export class GamePieceComponent implements OnInit {

  @Input() hasBomb = false;

  @Input() triggeredBomb = false;

  @Input() gamePiece: GamePiece = null;

  @Input() clicked = false;

  @Input() flagged = false;

  @Output() updateFlagCount: EventEmitter<any> = new EventEmitter();

  @Output() pieceClicked: EventEmitter<any> = new EventEmitter();

  adjacentCount = 0;

  // 0, 1, 2
  flagLevel = 0;

  countColors = {
    1: 'blue',
    2: 'green',
    3: 'red',
    4: 'navy',
    5: 'purple',
    6: 'orange',
    7: 'yellow',
    8: 'violet'
  };

  constructor() { }

  ngOnInit() {
    this.adjacentCount = this.gamePiece.adjacentCount;
  }

  onClick() {

    if (this.flagged) {
      return;
    }

    this.pieceClicked.emit(this.gamePiece);
  }

  placeFlag() {
    if (this.clicked) {
      return;
    }

    this.flagged = true;
    this.updateFlagClick();

    // Return false to prevent context menu from poping up
    return false;
  }

  updateFlagClick() {
    this.flagLevel++;

    if (this.flagLevel > 2) {
      this.flagLevel = 0;
      this.flagged = false;
      this.updateFlagCount.emit(true);
    }

    if (this.flagLevel === 1) {
      this.updateFlagCount.emit(false);
    }

    console.log(this.flagLevel);
  }

  getCountColor() {
    return this.countColors[this.adjacentCount];
  }

}
