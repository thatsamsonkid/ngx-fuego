import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitHeroComponent } from './split-hero.component';

describe('SplitHeroComponent', () => {
  let component: SplitHeroComponent;
  let fixture: ComponentFixture<SplitHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
