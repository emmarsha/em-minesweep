import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-em-minesweep',
  templateUrl: './em-minesweep.component.html',
  styleUrls: ['./em-minesweep.component.css']
})
export class EmMinesweepComponent implements OnInit {

  constructor() { }

  public height: number;

  public width: number;

  public bombCount: number;

  public displayMenu = true;

  levels = {
    'beginner' : {
      'height': 16,
      'width': 16,
      'bombCount': 6
    },
    'intermediate' : {
      'height': 32,
      'width': 32,
      'bombCount': 12
    },
    'advanced' : {
      'height': 64,
      'width': 64,
      'bombCount': 32
    },        
  }

  ngOnInit() {
  }


  startGame(difficulty) {
    console.log('start that game');
    console.log(this.levels[difficulty]);
  }

}
