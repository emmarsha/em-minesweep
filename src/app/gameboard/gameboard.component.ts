import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// -- Peers --
import { BoardPiece } from '../boardpiece/boardpiece';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() gamePieces: BoardPiece[] = [];

  @Output() reset: EventEmitter<any> = new EventEmitter();

  @Output() returnToMenu: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onReset() {
    this.reset.emit();
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
    this.setBoardVisible(true);
  }

}
