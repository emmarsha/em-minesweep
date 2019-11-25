import { Component, OnInit, OnChanges, Input } from '@angular/core';

// -- Peers --
import { BoardPiece } from '../boardpiece/boardpiece';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit, OnChanges {

  @Input() gamePieces: BoardPiece[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
