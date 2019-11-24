import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerComponent } from './timer/timer.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { BoardpieceComponent } from './boardpiece/boardpiece.component';
import { EmMinesweepComponent } from './em-minesweep/em-minesweep.component';
import { EmMinesweepMenuComponent } from './em-minesweep-menu/em-minesweep-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    GameboardComponent,
    BoardpieceComponent,
    EmMinesweepComponent,
    EmMinesweepMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
