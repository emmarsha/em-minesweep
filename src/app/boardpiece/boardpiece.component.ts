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

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    if (this.hasBomb) {
      this.clickedAMine.emit();
      return;
    }

    this.clicked = true;
  }

}
