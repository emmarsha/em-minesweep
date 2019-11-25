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

  @Input() gamePiece: GamePiece = null;

  @Input() clicked = false;

  @Output() clickedAMine: EventEmitter<any> = new EventEmitter();

  @Output() clickedABlank: EventEmitter<any> = new EventEmitter();

  adjacentCount = 0

  constructor() { }

  ngOnInit() {
    this.adjacentCount = this.gamePiece.adjacentCount;
  }

  onClick() {
    if (this.hasBomb) {
      this.clickedAMine.emit();
      return;
    }

    if (this.adjacentCount === 0) {
      this.clickedABlank.emit(this.gamePiece);
    }

    this.clicked = true;
  }



}
