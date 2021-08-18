import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuegoUiComponent } from './fuego-ui.component';

describe('FuegoUiComponent', () => {
  let component: FuegoUiComponent;
  let fixture: ComponentFixture<FuegoUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuegoUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuegoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
