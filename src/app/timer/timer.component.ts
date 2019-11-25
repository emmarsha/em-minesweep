import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  currentTime = 0;

  interval = null;

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.currentTime++;
    },1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  clearTimer() {
    this.currentTime = 0;
  }

  resetTimer() {
    this.clearTimer();
    this.startTimer();
  }

}
