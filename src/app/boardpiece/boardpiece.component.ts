import { Component, OnInit, Input } from '@angular/core';

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
  
  public clicked = false;  

  constructor() { }

  ngOnInit() {
  }

}
