import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmMinesweepMenuComponent } from './em-minesweep-menu.component';

describe('EmMinesweepMenuComponent', () => {
  let component: EmMinesweepMenuComponent;
  let fixture: ComponentFixture<EmMinesweepMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmMinesweepMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmMinesweepMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
