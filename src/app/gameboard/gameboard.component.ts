import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

// -- Peers --
import { BoardPiece } from '../boardpiece/boardpiece';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  @Input() gamePieces: BoardPiece[] = [];

  @Output() reset: EventEmitter<any> = new EventEmitter();

  @Output() returnToMenu: EventEmitter<any> = new EventEmitter();

  @ViewChild('gameTimer', {static: false}) gameTimer : TimerComponent;

  constructor() { }

  ngOnInit() {
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
      gamePiece.clicked = visibility;
      return gamePiece;
    });

    this.gamePieces = pieces;
  }

  gameOver() {
    this.gameTimer.stopTimer();
    this.setBoardVisible(true);
  }

}
