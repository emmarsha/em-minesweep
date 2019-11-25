import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-em-minesweep-menu',
  templateUrl: './em-minesweep-menu.component.html',
  styleUrls: ['./em-minesweep-menu.component.css']
})
export class EmMinesweepMenuComponent implements OnInit {

  @Output() startGame: EventEmitter<any> = new EventEmitter();

  difficulty: string = 'beginner';

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.startGame.emit(this.difficulty);
  }

}
