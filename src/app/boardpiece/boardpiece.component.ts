import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boardpiece',
  templateUrl: './boardpiece.component.html',
  styleUrls: ['./boardpiece.component.css']
})
export class BoardpieceComponent implements OnInit {

  @Input() adjacentCount = 0; 

  @Input() hasBomb = false;
  
  public clicked = false;  

  constructor() { }

  ngOnInit() {
  }

}
