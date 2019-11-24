import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmMinesweepComponent } from './em-minesweep.component';

describe('EmMinesweepComponent', () => {
  let component: EmMinesweepComponent;
  let fixture: ComponentFixture<EmMinesweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmMinesweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmMinesweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
