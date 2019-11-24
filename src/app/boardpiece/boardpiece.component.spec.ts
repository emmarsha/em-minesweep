import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardpieceComponent } from './boardpiece.component';

describe('BoardpieceComponent', () => {
  let component: BoardpieceComponent;
  let fixture: ComponentFixture<BoardpieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardpieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardpieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
