import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullHeroComponent } from './full-hero.component';

describe('FullHeroComponent', () => {
  let component: FullHeroComponent;
  let fixture: ComponentFixture<FullHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
