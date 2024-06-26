import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCarouselComponent } from './characters-carousel.component';

describe('CharactersCarouselComponent', () => {
  let component: CharactersCarouselComponent;
  let fixture: ComponentFixture<CharactersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
