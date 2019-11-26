import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boardpiece',
  templateUrl: './boardpiece.component.html',
  styleUrls: ['./boardpiece.component.css']
})
export class BoardpieceComponent implements OnInit {

  @Input() adjacentCount = 0; 

  @Input() hasBomb = false;

  @Input() row = 0;

  @Input() column = 0;

  @Input() clicked = false;

  @Output() clickedAMine: EventEmitter<any> = new EventEmitter();

  flagPlaced = false;

  // 0, 1, 2
  flagLevel = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.flagPlaced) {
      return;
    }

    if (this.hasBomb) {
      this.clickedAMine.emit();
      return;
    }

    this.clicked = true;

    return false;
  }

  // test
  placeFlag() {
    if (this.clicked) {
      return false;
    }

    this.flagPlaced = true;
    this.updateFlagClick();

    return false;
  }

  updateFlagClick() {
    this.flagLevel++;

    console.log(this.flagLevel);

    if (this.flagLevel > 2) {
      this.flagLevel = 0;
      this.flagPlaced = false;
    }
  }

}
